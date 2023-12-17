import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерТелефона: DS.attr('number'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  номерТелефона: {
    descriptionKey: 'models.i-i-s-postamat-пользователь.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-postamat-пользователь.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПользовательE', 'i-i-s-postamat-пользователь', {
    фИО: attr('ФИО', { index: 0 }),
    номерТелефона: attr('Номер телефона', { index: 1 })
  });

  modelClass.defineProjection('ПользовательL', 'i-i-s-postamat-пользователь', {
    фИО: attr('ФИО', { index: 0 }),
    номерТелефона: attr('Номер телефона', { index: 1 })
  });
};
