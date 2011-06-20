LoginExample.userController = SC.ObjectController.create({

  setupUser: function(userId) {
    this.set('content', LoginExample.store.find(LoginExample.User, userId));
  }

});