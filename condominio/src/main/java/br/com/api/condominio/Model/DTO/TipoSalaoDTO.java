package br.com.api.condominio.Model.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TipoSalaoDTO {
   
    private Integer id ;
    private String descricao ;
    private Integer condominio_id ;
}
