package br.com.api.condominio.Model;

import br.com.api.condominio.Model.DTO.FuncaoDTO;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="FUNCAO")
public class Funcao {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;

    @Column(name="funcao")
    private String funcao;

    @Column(name = "descricao")
    private String descricao;

    @Column(name="condominio_id")
    private Integer condominio_id;

    public Funcao toDTO(FuncaoDTO dto ){
        Funcao funcao = new Funcao();
        funcao.id = dto.getId();
        funcao.funcao= dto.getFuncao();
        funcao.descricao = dto.getDescricao();
        
        return funcao ;
    
    }


}
