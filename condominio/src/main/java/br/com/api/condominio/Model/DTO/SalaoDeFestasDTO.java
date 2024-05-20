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
public class SalaoDeFestasDTO {
    
    private Integer id ;
    private Integer condominio_id;
    private Integer bloco;
    private Integer tipo;
    private Long morador_id;
    private Date data;
    private Integer participantes;
    private String horario_inicio;
    private String horario_final;
}
