package br.com.api.condominio.Model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="BLOCOS")
public class Blocos {

      
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id ;

    @Column(name="id_condominio")
    private Integer idCondominio ;

    @Column(name="descricao")
    private String descricao ;

    @Column(name="qtd_casas")
    private Integer qtdCasas ;

    @Column(name="qtd_andares")
    private Integer qtdAndares ;

    @Column(name="divisao")
    private Integer divisao ;
}
