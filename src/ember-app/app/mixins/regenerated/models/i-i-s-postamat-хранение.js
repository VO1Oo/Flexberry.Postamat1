import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗавершения: DS.attr('date'),
  датаНачала: DS.attr('date'),
  номер: DS.attr('number'),
  посылка: DS.hasMany('i-i-s-postamat-посылка', { inverse: 'хранение', async: false })
});

export let ValidationRules = {
  датаЗавершения: {
    descriptionKey: 'models.i-i-s-postamat-хранение.validations.датаЗавершения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаНачала: {
    descriptionKey: 'models.i-i-s-postamat-хранение.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-postamat-хранение.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  посылка: {
    descriptionKey: 'models.i-i-s-postamat-хранение.validations.посылка.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ХранениеE', 'i-i-s-postamat-хранение', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаЗавершения: attr('Дата завершения', { index: 2 }),
    посылка: hasMany('i-i-s-postamat-посылка', 'Посылка', {
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
      сгенКод: belongsTo('i-i-s-postamat-сген-код', 'Код', {
        сгенКод: attr('Код', { index: 10, hidden: true })
      }, { index: -1, hidden: true })
    })
  });

  modelClass.defineProjection('ХранениеL', 'i-i-s-postamat-хранение', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаЗавершения: attr('Дата завершения', { index: 2 })
  });
};
