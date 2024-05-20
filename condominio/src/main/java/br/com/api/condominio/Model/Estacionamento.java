package br.com.api.condominio.Model;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="ESTACIONAMENTO")
public class Estacionamento {
    
    @EmbeddedId
    private EstacionamentoId id;
    
    @Column(name="morador_id")
    private Long morador_id;
    
    @Column(name="coberto")
    private Integer coberto;

    @Column(name="ocupado")
    private Integer ocupado ;
    
}
