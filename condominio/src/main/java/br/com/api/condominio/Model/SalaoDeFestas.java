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
@Table(name="SALAO_DE_FESTAS")
public class SalaoDeFestas {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id ;
    @Column(name="condominio_id")
    private Integer condominio_id;
    @Column(name="bloco")
    private Integer bloco;
  @Column(name="tipo")
    private Integer tipo;
    @Column(name="morador_id")
    private Long morador_id;
    @Column(name="data")
    private Date data;
    @Column(name="participantes")
    private Integer participantes;
    @Column(name="horario_inicio")
    private String horario_inicio;
    @Column(name="horario_final")
    private String horario_final;
}
