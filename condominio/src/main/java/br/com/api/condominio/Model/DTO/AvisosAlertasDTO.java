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
public class AvisosAlertasDTO {
    private Integer id ;
    private Integer condominio_id;
    private Long morador_id;
    private Date data_post;
    private Integer avisoAlerta ;
}
