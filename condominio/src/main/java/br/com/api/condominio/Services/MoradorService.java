package br.com.api.condominio.Services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.api.condominio.DAO.MoradorDAO;
import br.com.api.condominio.Model.Morador;
import br.com.api.condominio.Model.MoradorId;
import br.com.api.condominio.Model.DTO.MensagemDTO;
import br.com.api.condominio.Model.DTO.MoradorDTO;

@Service
public class MoradorService {

    @Autowired
    private MoradorDAO dao;

    public MoradorDAO getDao(){
        return dao;
    }
     
    public MensagemDTO salvar(MoradorDTO dto, Boolean isAlterar) {
        MensagemDTO mensagem = new MensagemDTO();
        Morador morador;
        MoradorId moradorId = new MoradorId();
        moradorId.setId(dto.getId());
        moradorId.setCondominio_id(dto.getCondominio_id());
        
        Optional<Morador> optionalFuncao = dao.findById(moradorId);
        if (isAlterar) {
            if (optionalFuncao.isPresent()) {
                morador = optionalFuncao.get();
                morador.setId(moradorId);
                morador.setNome(dto.getNome());
                morador.setSenha(dto.getSenha());
                morador.setEmail(dto.getEmail());
                morador.setDataNascimento(dto.getDataNascimento());
                mensagem.setMensagem("Morador(a) atualizado(a) com sucesso.");
            } else {
                mensagem.setMensagem("Morador(a) não encontrado(a) para atualização.");
                return mensagem;
            }
        } else {
            if (optionalFuncao.isPresent()){
                mensagem.setMensagem("Já existe um morador com esse cpf nesse condomínio.");
                return mensagem;
            }
            morador = new Morador();
            morador.setId(moradorId);
            morador.setNome(dto.getNome());
            morador.setSenha(dto.getSenha());
            morador.setEmail(dto.getEmail());
            morador.setDataNascimento(dto.getDataNascimento());
            mensagem.setMensagem("Morador(a) cadastrado(a) com sucesso.");
        }

        dao.save(morador);
        return mensagem;
    }

    public List<MoradorDTO> listarTodos() {
        List<Morador> moradores = dao.findAll();
        return moradores.stream()
                .map(morador -> new MoradorDTO(morador.getId().getId(),morador.getId().getCondominio_id(),morador.getNome(),morador.getEmail(),morador.getDataNascimento(),morador.getSenha()))
                .collect(Collectors.toList());
    }

    public MensagemDTO excluirMorador(Long id, Integer condominio) {
        MensagemDTO mensagem = new MensagemDTO();
        MoradorId moradorId = new MoradorId();
        moradorId.setId(id);
        moradorId.setCondominio_id(condominio);
        Optional<Morador> optionalMorador = dao.findById(moradorId);
        if (optionalMorador.isPresent()) {
            Morador morador = optionalMorador.get();
            dao.delete(morador);
            mensagem.setMensagem("Morador(a) excluído(a) com sucesso.");
        } else {
            mensagem.setMensagem("Não foi encontrado(a) nenhum(a) morador(a) com esse cpf/cnpj.");
        }
        return mensagem;
    }


}
