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
public class MoradorId implements Serializable {
    
  @Column(name="id")
  private Long id;
  @Column(name="condominio_id")
  private Integer condominio_id;
}
