package Postamat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Postamat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Посылка
 */
@Entity(name = "IISPostamatПосылка")
@Table(schema = "public", name = "Посылка")
public class Posylka {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерПостамата")
    private Integer номерпостамата;

    @Column(name = "НомерПосылки")
    private Integer номерпосылки;

    @Column(name = "НомерЯчейки")
    private Integer номерячейки;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Tranzakciya")
    @Convert("Tranzakciya")
    @Column(name = "Транзакция", length = 16, unique = true, nullable = false)
    private UUID _tranzakciyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Tranzakciya", insertable = false, updatable = false)
    private Tranzakciya tranzakciya;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Logistika")
    @Convert("Logistika")
    @Column(name = "Логистика", length = 16, unique = true, nullable = false)
    private UUID _logistikaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Logistika", insertable = false, updatable = false)
    private Logistika logistika;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SgenKod")
    @Convert("SgenKod")
    @Column(name = "СгенКод", length = 16, unique = true, nullable = false)
    private UUID _sgenkodid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SgenKod", insertable = false, updatable = false)
    private SgenKod sgenkod;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Xranenie")
    @Convert("Xranenie")
    @Column(name = "Хранение", length = 16, unique = true, nullable = false)
    private UUID _xranenieid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Xranenie", insertable = false, updatable = false)
    private Xranenie xranenie;


    public Posylka() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерПостамата() {
      return номерпостамата;
    }

    public void setНомерПостамата(Integer номерпостамата) {
      this.номерпостамата = номерпостамата;
    }

    public Integer getНомерПосылки() {
      return номерпосылки;
    }

    public void setНомерПосылки(Integer номерпосылки) {
      this.номерпосылки = номерпосылки;
    }

    public Integer getНомерЯчейки() {
      return номерячейки;
    }

    public void setНомерЯчейки(Integer номерячейки) {
      this.номерячейки = номерячейки;
    }


}