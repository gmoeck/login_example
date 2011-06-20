LoginExample.statechart = SC.Statechart.create({
  initialState: 'notLoggedIn',
  notLoggedIn: SC.State.extend({
    initialSubstate: 'awaitingUserInput',

    enterState: function() {
      this.set('pane', SC.TemplatePane.append({ layerId: 'login_page', templateName: 'login_page'}));
    },

    exitState: function() {
      this.get('pane').remove();
    },


    awaitingUserInput: SC.State.extend({
      login: function(userName, password) {
        this.gotoState('authenticatingUser', {userName: userName, password: password});
      }
    }),

    authenticatingUser: SC.State.extend({
      enterState: function(userInformation) {
        LoginExample.authenticationDataSource.attemptLogin(userInformation.userName, userInformation.password);
      },

      loginSuccessful: function(userId) {
        this.gotoState('loggedIn', userId);
      },

      loginFailed: function(errorMessage) {
        LoginExample.authenticationController.loginFailed(errorMessage);
        this.gotoState('awaitingUserInput');
      }
    })
  }),

  loggedIn: SC.State.extend({
    enterState: function(userId) {
      this.set('pane', SC.TemplatePane.append({layerId: 'dashboard', templateName: 'dashboard'}));
      LoginExample.userController.setupUser(userId);
    },

    exitState: function() {
      this.get('pane').remove();
    }
  })
});