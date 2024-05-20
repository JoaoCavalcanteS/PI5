package br.com.api.condominio.Model;


import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Entity
@Table(name="AVISOS_ALERTAS")
public class AvisosAlertas {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id ;

    @Column(name="condominio_id")
    private Integer condominio_id;
    
    @Column(name="morador_id")
    private Long morador_id;
    
    @Column(name="data_post")
    private Date data_post;

    @Column(name="avisoAlerta")
    private Integer avisoAlerta ;
    
}
