LoginExample.authenticationDataSource = SC.Object.create({

  attemptLogin: function(userName, password) {
    SC.Request.postUrl('/login', {username: userName, password: password}).json().notify(this, 'loginAttemptComplete').send();
  },

  loginAttemptComplete: function(response) {
    if(SC.ok(response)){
      var userHash = response.get('body').user;
      LoginExample.store.loadRecord(LoginExample.User, userHash);
      LoginExample.statechart.sendEvent('loginSuccessful', userHash.id);
    }else{
      LoginExample.statechart.sendEvent('loginFailed', response.get('body').error);
    }
  }
});