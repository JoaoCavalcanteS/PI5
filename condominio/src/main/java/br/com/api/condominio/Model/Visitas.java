package br.com.api.condominio.Model;

import lombok.Getter;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="VISITAS")
public class Visitas {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id ;

    @Column(name="condominio_id")
    private Integer condominio_id;

    @Column(name="morador_id")
    private Integer morador_id;  

    
    @Column(name="documento_visita")
    private Integer documento_visita;  

    @Column(name="data_visita")
    private Date data_visita;

    @Column(name="motivo")
    private String motivo;

    @Column(name="telefone")
    private String telefone;

    


}
