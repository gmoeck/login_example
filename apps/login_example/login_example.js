// ==========================================================================
// Project:   LoginExample
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals LoginExample */

LoginExample = SC.Application.create({
  store: SC.Store.create()
});

SC.ready(function() {
  LoginExample.statechart.initStatechart();
});
