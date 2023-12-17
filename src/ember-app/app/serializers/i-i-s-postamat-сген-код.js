import { Serializer as СгенКодSerializer } from
  '../mixins/regenerated/serializers/i-i-s-postamat-сген-код';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СгенКодSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
