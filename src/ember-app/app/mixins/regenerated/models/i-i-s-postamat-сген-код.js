import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  сгенКод: DS.attr('number'),
  пользователь: DS.belongsTo('i-i-s-postamat-пользователь', { inverse: null, async: false })
});

export let ValidationRules = {
  сгенКод: {
    descriptionKey: 'models.i-i-s-postamat-сген-код.validations.сгенКод.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  пользователь: {
    descriptionKey: 'models.i-i-s-postamat-сген-код.validations.пользователь.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СгенКодE', 'i-i-s-postamat-сген-код', {
    сгенКод: attr('Сген код', { index: 0 }),
    пользователь: belongsTo('i-i-s-postamat-пользователь', 'Пользователь', {
      фИО: attr('ФИО', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('СгенКодL', 'i-i-s-postamat-сген-код', {
    сгенКод: attr('Сген код', { index: 0 }),
    пользователь: belongsTo('i-i-s-postamat-пользователь', 'ФИО', {
      фИО: attr('ФИО', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
