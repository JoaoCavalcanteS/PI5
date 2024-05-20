package br.com.api.condominio.Model.DTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BlocosDTO {
 
    private Integer id ;
    private Integer idCondominio; 
    private String descricao ;
    private Integer qtdCasas ;
    private Integer qtdAndares ;
    private Integer divisao ;
}
