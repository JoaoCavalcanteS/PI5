package br.com.api.condominio.Model.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CasaDTO {

    private Integer condominio_id;
    private Integer numero_casa;
    private Integer bloco;
    private Integer vazia;
    private Long morador_id;
    private Integer aluguel;
}
