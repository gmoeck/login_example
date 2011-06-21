LoginExample.DashboardView = SC.TemplateView.extend({
  userBinding: 'LoginExample.userController.content',

  logout: function() {
    LoginExample.statechart.sendEvent('logout');
  }
});