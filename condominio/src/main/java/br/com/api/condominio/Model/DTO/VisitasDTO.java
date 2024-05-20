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
public class VisitasDTO {
     private Integer id ;
    private Integer condominio_id;
    private Integer morador_id;  
    private Integer documento_visita;  
    private Date data_visita;
    private String motivo;
    private String telefone;
}
