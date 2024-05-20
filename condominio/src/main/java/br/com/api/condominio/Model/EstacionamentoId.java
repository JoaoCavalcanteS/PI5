package br.com.api.condominio.Model;

import java.io.Serializable;

import jakarta.persistence.Column;
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
public class EstacionamentoId implements Serializable {
    
    @Column(name="vaga")
    private String vaga;
    @Column(name="condominio_id")
    private Integer condominio_id;
}
