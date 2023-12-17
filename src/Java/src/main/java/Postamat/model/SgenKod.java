package Postamat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Postamat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: СгенКод
 */
@Entity(name = "IISPostamatСгенКод")
@Table(schema = "public", name = "СгенКод")
public class SgenKod {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "СгенКод")
    private Integer сгенкод;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Polzovatel")
    @Convert("Polzovatel")
    @Column(name = "Пользователь", length = 16, unique = true, nullable = false)
    private UUID _polzovatelid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Polzovatel", insertable = false, updatable = false)
    private Polzovatel polzovatel;


    public SgenKod() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getСгенКод() {
      return сгенкод;
    }

    public void setСгенКод(Integer сгенкод) {
      this.сгенкод = сгенкод;
    }


}