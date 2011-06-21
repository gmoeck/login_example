LoginExample.authenticationManager = SC.Object.create({

  attemptLogin: function(userName, password) {
    SC.Request.postUrl('/login', {username: userName, password: password}).json().notify(this, 'loginAttemptComplete').send();
  },

  loginAttemptComplete: function(response) {
    if(SC.ok(response)){
      this._authSuccessful(response);
    }else{
      this._authFailed(response);
    }
  },

  _authSuccessful: function(response) {
    var userHash = response.get('body').user;
    LoginExample.store.loadRecord(LoginExample.User, userHash);
    var user = LoginExample.store.find(LoginExample.User, userHash.id);
    LoginExample.statechart.sendEvent('loginSuccessful', user);
  },

  _authFailed: function(response) {
    LoginExample.statechart.sendEvent('loginFailed', response.get('body').error);
  }
});