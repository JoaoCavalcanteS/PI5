package br.com.api.condominio.Services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.api.condominio.DAO.FuncaoDAO;
import br.com.api.condominio.Model.Funcao;
import br.com.api.condominio.Model.DTO.FuncaoDTO;
import br.com.api.condominio.Model.DTO.MensagemDTO;

@Service
public class FuncaoService {
    
    @Autowired
    private FuncaoDAO dao;

    public FuncaoDAO getDao(){
       return dao;
    }

    
    public MensagemDTO salvar(FuncaoDTO dto, Boolean isAlterar) {
        MensagemDTO mensagem = new MensagemDTO();
        Funcao funcao;

        if (isAlterar) {
            Optional<Funcao> optionalFuncao = dao.findById(dto.getId());
            if (optionalFuncao.isPresent()) {
                funcao = optionalFuncao.get();
                funcao.setFuncao(dto.getFuncao());
                funcao.setDescricao(dto.getDescricao());
                funcao.setCondominio_id(dto.getCondominio_id());
                mensagem.setMensagem("Função atualizada com sucesso.");
            } else {
                mensagem.setMensagem("Função não encontrada para atualização.");
                return mensagem;
            }
        } else {
            funcao = new Funcao();
            funcao.setFuncao(dto.getFuncao());
            funcao.setDescricao(dto.getDescricao());
            funcao.setCondominio_id(dto.getCondominio_id());
            mensagem.setMensagem("Função cadastrada com sucesso.");
        }

        dao.save(funcao);
        return mensagem;
    }

    public List<FuncaoDTO> listarTodos() {
        List<Funcao> funcoes = dao.findAll();
        return funcoes.stream()
                .map(funcao -> new FuncaoDTO(funcao.getId(), funcao.getFuncao(), funcao.getDescricao(),funcao.getCondominio_id()))
                .collect(Collectors.toList());
    }

    public MensagemDTO excluirFuncao(Integer id) {
        MensagemDTO mensagem = new MensagemDTO();
        Optional<Funcao> optionalFuncao = dao.findById(id);
        if (optionalFuncao.isPresent()) {
            Funcao funcao = optionalFuncao.get();
            dao.delete(funcao);
            mensagem.setMensagem("Função Excluída com sucesso.");
        } else {
            mensagem.setMensagem("Não foi encontrado nenhuma função com esse código.");
        }
        return mensagem;
    }
}
