package br.com.api.condominio.Model;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="CONDOMINIO")
public class Condominio {
   @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id ;

    @Column(name="nome")
    private String nome ;

    @Column(name="logradouro")
    private String logradouro ;

    @Column(name="bairro")
    private String bairro ;

    @Column(name="cidade")
    private String cidade ;

    @Column(name="estado")
    private String estado ;

    @Column(name="numero")
    private Integer numero ;

    @Column(name="cep")
    private Long cep ;
    

}
