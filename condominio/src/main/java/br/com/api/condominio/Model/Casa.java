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
@Table(name="CASA")
public class Casa {
    
    @EmbeddedId
    private CasaId id;

    @Column(name="vazia")
    private Integer vazia;

    @Column(name="morador_id")
    private Long morador_id;

    @Column(name="aluguel")
    private Integer aluguel;
}
