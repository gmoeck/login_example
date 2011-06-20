LoginExample.DashboardView = SC.TemplateView.extend({
  userBinding: 'LoginExample.userController.content',

  init: function() {
    sc_super();
    if(!this.get('responder')) this.set('responder', LoginExample.statechart);
  },

  logout: function() {
    this.get('responder').sendEvent('logout');
  }
});