sc_require('statechart');

LoginExample.LoginFormView = SC.TemplateView.extend({
  init: function() {
    sc_super();
    if(!this.get('responder')) this.set('responder', LoginExample.statechart);
  },

  userName: '',
  password: '',

  loginButtonPressed: function() {
    this.get('responder').sendEvent('login', this.get('userName'), this.get('password'));
  },

  hasErrorBinding: 'LoginExample.authenticationController.hasError',
  errorMessageBinding: 'LoginExample.authenticationController.errorMessage',

  messageClass: function() {
    return this.get('hasError') ? 'block-header-error' : 'block-header';
  }.property('hasError').cacheable(),

  loginMessage: function() {
    return this.get('hasError') ? this.get('errorMessage') : 'Please Login';
  }.property('hasError', 'errorMessage').cacheable()
});
