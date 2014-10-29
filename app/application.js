define(["backbone", "backbone.marionette"], function(Backbone) {
  var App = new Backbone.Marionette.Application();

  App.addRegions(
    {
      mainRegion:  '#main'
    , modalRegion: '#modal'
    }
  );

  App.on('start', function(){
    if(Backbone.history){
      Backbone.history.start();
    }
  });

  App.navigate = function(route, options) {
    options || (options = {})
    Backbone.history.navigate(route, options)
  };

  return App;
});