import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СтатЯчейкиEnum from '../enums/i-i-s-postamat-стат-ячейки';

export default FlexberryEnum.extend({
  enum: СтатЯчейкиEnum,
  sourceType: 'IIS.Postamat.СтатЯчейки'
});
