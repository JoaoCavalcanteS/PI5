package br.com.api.condominio.Model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="MORADOR")
public class Morador {
    
    @EmbeddedId
    private MoradorId id;

     @Column(name="NOME")
    private String nome;

     @Column(name="EMAIL")
    private String email;

     @Column(name="DATA_NASCIMENTO")
    private Date dataNascimento;

     @Column(name="SENHA")
    private String senha;
    
}
