sc_require('statechart');

LoginExample.LoginFormView = SC.TemplateView.extend({
  userName: '',
  password: '',
  hasErrorBinding: 'LoginExample.authenticationController.hasError',
  errorMessageBinding: 'LoginExample.authenticationController.errorMessage',

  loginButtonPressed: function() {
    LoginExample.statechart.sendEvent('login', this.get('userName'), this.get('password'));
  },

  messageClass: function() {
    return this.get('hasError') ? 'block-header-error' : 'block-header';
  }.property('hasError').cacheable(),

  loginMessage: function() {
    return this.get('hasError') ? this.get('errorMessage') : 'Please Login';
  }.property('hasError', 'errorMessage').cacheable()
});
