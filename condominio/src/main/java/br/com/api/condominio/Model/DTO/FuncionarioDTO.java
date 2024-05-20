package br.com.api.condominio.Model.DTO;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FuncionarioDTO {
    
    private Long id;
    private String nome;
    private String email;
    private String senha;
    private Date dataNascimento;
    private Integer funcao;
}
