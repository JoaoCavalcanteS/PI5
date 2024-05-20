package br.com.api.condominio.Model.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EstacionamentoDTO {
    
    private String vaga;
    private Integer condominio_id;
    private Long morador_id;
    private Integer coberto;
    private Integer ocupado ;
}
