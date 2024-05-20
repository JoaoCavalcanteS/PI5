package br.com.api.condominio.Model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Setter;
import lombok.Getter;

@Getter
@Setter
@Entity
@Table(name="TIPO_SALAO")
public class TipoSalao {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id ;

    @Column(name="descricao")
    private String descricao ;

    @Column(name="condominio_id")
    private Integer condominio_id ;
}
