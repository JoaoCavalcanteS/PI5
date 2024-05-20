package br.com.api.condominio.Model.DTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CondominioDTO {
    
    private Integer id ;
    private String nome ;
    private String logradouro ;
    private String bairro ;
    private String cidade ;
    private String estado ;
    private String numero ;
    private Long cep ;
}
