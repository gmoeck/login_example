LoginExample.statechart = SC.Statechart.create({
  initialState: 'notLoggedIn',
  notLoggedIn: SC.State.extend({
    initialSubstate: 'awaitingUserInput',

    enterState: function() {
      LoginExample.userController.set('content', null);
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
        LoginExample.authenticationManager.attemptLogin(userInformation.userName, userInformation.password);
      },

      loginSuccessful: function(user) {
        LoginExample.userController.set('content', user);
        this.gotoState('loggedIn', user);
      },

      loginFailed: function(errorMessage) {
        LoginExample.authenticationController.loginFailed(errorMessage);
        this.gotoState('awaitingUserInput');
      }
    })
  }),

  loggedIn: SC.State.extend({

    initialSubstate: 'viewingDashboard',

    logout: function() {
      LoginExample.authenticationController.newLoginSession();
      this.gotoState('notLoggedIn');
    },


    viewingDashboard: SC.State.extend({
      enterState: function() {
        this.set('pane', SC.TemplatePane.append({layerId: 'dashboard', templateName: 'dashboard'}));
      },

      exitState: function() {
        this.get('pane').remove();
      }
    })
  })
});