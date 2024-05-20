package br.com.api.condominio.Services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.api.condominio.DAO.BlocosDAO;
import br.com.api.condominio.Model.Blocos;
import br.com.api.condominio.Model.DTO.BlocosDTO;
import br.com.api.condominio.Model.DTO.MensagemDTO;

@Service
public class BlocosService {

     @Autowired
    private BlocosDAO dao;

    public BlocosDAO getDao(){
       return dao;
    }

    
    public MensagemDTO salvar(BlocosDTO dto, Boolean isAlterar) {
        MensagemDTO mensagem = new MensagemDTO();
        Blocos bloco;

        if (isAlterar) {
            Optional<Blocos> optionalBloco = dao.findById(dto.getId());
            if (optionalBloco.isPresent()) {
                bloco = optionalBloco.get();
                bloco.setId(dto.getId());
                bloco.setIdCondominio(dto.getIdCondominio());
                bloco.setQtdAndares(dto.getQtdAndares());
                bloco.setDescricao(dto.getDescricao());
                bloco.setQtdCasas(dto.getQtdCasas());
                bloco.setDivisao(dto.getDivisao());
                mensagem.setMensagem("Bloco atualizado com sucesso.");
            } else {
                mensagem.setMensagem("Bloco não encontrado para atualização.");
                return mensagem;
            }
        } else {
           bloco = new Blocos();
            bloco.setIdCondominio(dto.getIdCondominio());
            bloco.setQtdAndares(dto.getQtdAndares());
            bloco.setDescricao(dto.getDescricao());
            bloco.setQtdCasas(dto.getQtdCasas());
            bloco.setDivisao(dto.getDivisao());
            mensagem.setMensagem("Bloco cadastrado com sucesso.");
        }

        dao.save(bloco);
        return mensagem;
    }

    public List<BlocosDTO> listarTodos() {
        List<Blocos> blocos = dao.findAll();
        return blocos.stream()
                .map(bloco -> new BlocosDTO(bloco.getId(),bloco.getIdCondominio(), bloco.getDescricao(),bloco.getQtdCasas(),bloco.getQtdAndares(),bloco.getDivisao()))
                .collect(Collectors.toList());
    }

    public MensagemDTO excluirBloco(Integer id) {
        MensagemDTO mensagem = new MensagemDTO();
        Optional<Blocos> optionalBloco = dao.findById(id);
        if (optionalBloco.isPresent()) {
            Blocos bloco = optionalBloco.get();
            dao.delete(bloco);
            mensagem.setMensagem("Bloco Excluído com sucesso.");
        } else {
            mensagem.setMensagem("Não foi encontrado nenhum bloco com esse código.");
        }
        return mensagem;
    }    
}
