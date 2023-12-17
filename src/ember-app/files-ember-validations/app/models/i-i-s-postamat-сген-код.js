import {
  defineNamespace,
  defineProjections,
  Model as СгенКодMixin
} from '../mixins/regenerated/models/i-i-s-postamat-сген-код';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СгенКодMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
