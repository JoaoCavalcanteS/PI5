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
public class CasaId implements Serializable {
    
    @Column(name="condominio_id")
    private Integer condominio_id;

    @Column(name="numero_casa")
    private Integer numero_casa;
    
    @Column(name="bloco")
    private Integer bloco;
}
