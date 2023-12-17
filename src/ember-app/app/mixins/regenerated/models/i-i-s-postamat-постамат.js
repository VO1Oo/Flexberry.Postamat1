import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерПостамата: DS.attr('number'),
  статусПостамата: DS.attr('i-i-s-postamat-стат-пост'),
  адрес: DS.belongsTo('i-i-s-postamat-адрес', { inverse: null, async: false }),
  ячейка: DS.hasMany('i-i-s-postamat-ячейка', { inverse: 'постамат', async: false })
});

export let ValidationRules = {
  номерПостамата: {
    descriptionKey: 'models.i-i-s-postamat-постамат.validations.номерПостамата.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статусПостамата: {
    descriptionKey: 'models.i-i-s-postamat-постамат.validations.статусПостамата.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  адрес: {
    descriptionKey: 'models.i-i-s-postamat-постамат.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  ячейка: {
    descriptionKey: 'models.i-i-s-postamat-постамат.validations.ячейка.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПостаматE', 'i-i-s-postamat-постамат', {
    номерПостамата: attr('Номер постамата', { index: 0 }),
    статусПостамата: attr('Статус постамата', { index: 1 }),
    адрес: belongsTo('i-i-s-postamat-адрес', 'Адрес', {
      адрес: attr('Адрес', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'адрес' }),
    ячейка: hasMany('i-i-s-postamat-ячейка', 'Ячейка', {
      номерЯчейки: attr('Номер ячейки', { index: 0 }),
      статус: attr('Статус', { index: 1 }),
      хранение: belongsTo('i-i-s-postamat-хранение', 'Хранение', {
        номер: attr('Номер', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'номер' })
    })
  });

  modelClass.defineProjection('ПостаматL', 'i-i-s-postamat-постамат', {
    номерПостамата: attr('Номер постамата', { index: 0 }),
    статусПостамата: attr('Статус постамата', { index: 1 }),
    адрес: belongsTo('i-i-s-postamat-адрес', 'Адрес', {
      адрес: attr('Адрес', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
