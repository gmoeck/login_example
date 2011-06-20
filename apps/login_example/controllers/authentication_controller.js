LoginExample.authenticationController = SC.ObjectController.create({
  hasError: false,
  errorMessage: null,

  newLoginSession: function() {
    this.set('hasError', false);
    this.set('errorMessage', null);
  },

  loginFailed: function(errorMessage) {
    this.set('hasError', true);
    this.set('errorMessage', errorMessage);
  }
});