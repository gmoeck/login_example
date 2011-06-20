LoginExample.authenticationController = SC.ObjectController.create({
  hasError: NO,
  errorMessage: '',

  loginFailed: function(errorMessage) {
    this.set('hasError', true);
    this.set('errorMessage', errorMessage);
  }
});