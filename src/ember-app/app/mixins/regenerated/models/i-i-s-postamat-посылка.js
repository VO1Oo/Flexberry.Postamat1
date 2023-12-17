import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерПостамата: DS.attr('number'),
  номерПосылки: DS.attr('number'),
  номерЯчейки: DS.attr('number'),
  логистика: DS.belongsTo('i-i-s-postamat-логистика', { inverse: null, async: false }),
  сгенКод: DS.belongsTo('i-i-s-postamat-сген-код', { inverse: null, async: false }),
  транзакция: DS.belongsTo('i-i-s-postamat-транзакция', { inverse: null, async: false }),
  хранение: DS.belongsTo('i-i-s-postamat-хранение', { inverse: 'посылка', async: false })
});

export let ValidationRules = {
  номерПостамата: {
    descriptionKey: 'models.i-i-s-postamat-посылка.validations.номерПостамата.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерПосылки: {
    descriptionKey: 'models.i-i-s-postamat-посылка.validations.номерПосылки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерЯчейки: {
    descriptionKey: 'models.i-i-s-postamat-посылка.validations.номерЯчейки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  логистика: {
    descriptionKey: 'models.i-i-s-postamat-посылка.validations.логистика.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сгенКод: {
    descriptionKey: 'models.i-i-s-postamat-посылка.validations.сгенКод.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  транзакция: {
    descriptionKey: 'models.i-i-s-postamat-посылка.validations.транзакция.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  хранение: {
    descriptionKey: 'models.i-i-s-postamat-посылка.validations.хранение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПосылкаE', 'i-i-s-postamat-посылка', {
    номерПостамата: attr('Номер постамата', { index: 0 }),
    номерПосылки: attr('Номер посылки', { index: 1 }),
    номерЯчейки: attr('Номер ячейки', { index: 2 }),
    логистика: belongsTo('i-i-s-postamat-логистика', 'Логистика', {
      номер: attr('Номер', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'номер' }),
    транзакция: belongsTo('i-i-s-postamat-транзакция', 'Транзакция', {
      дата: attr('Дата', { index: 6 }),
      время: attr('Время', { index: 7, hidden: true }),
      оплата: attr('Оплата', { index: 8 }),
      сумма: attr('Сумма', { index: 9 })
    }, { index: 3, displayMemberPath: 'время' }),
    сгенКод: belongsTo('i-i-s-postamat-сген-код', 'Сгенерировать код', {
      сгенКод: attr('Сгенерировать код', { index: 10, hidden: true })
    }, { index: 11, hidden: true })
  });
};
