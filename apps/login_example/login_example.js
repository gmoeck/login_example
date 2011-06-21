LoginExample = SC.Application.create({
  store: SC.Store.create()
});

SC.ready(function() {
  LoginExample.statechart.initStatechart();
});
