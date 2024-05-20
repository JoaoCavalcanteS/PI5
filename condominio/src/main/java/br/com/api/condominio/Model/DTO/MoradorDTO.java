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
public class MoradorDTO {

    private Long id;
    private Integer condominio_id;
    private String nome;
    private String email;
    private Date dataNascimento;
    private String senha;
}
