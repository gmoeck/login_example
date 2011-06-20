LoginExample.User = SC.Record.extend({
  primaryKey: 'id',
  id:        SC.Record.attr(Number, {isRequired: YES}),
  firstName: SC.Record.attr(String, {key: 'first_name'}),
  lastName:  SC.Record.attr(String, {key: 'last_name'}),
  email:     SC.Record.attr(String),
  username:  SC.Record.attr(String)
});