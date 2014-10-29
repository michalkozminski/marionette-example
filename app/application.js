define(["backbone", "backbone.marionette", "jquery", "bootstrap"], function(Backbone, ModalRegion, jQuery) {
  var App = new Backbone.Marionette.Application();

  App.addRegions(
    {
      mainRegion:  '#main'
    , modalRegion: Marionette.Region.extend({
        el: '#modal'
      , onShow: function() {
        jQuery('.modal').modal('show');
      }
      , onEmpty: function(){
        jQuery('.modal').modal('hide');
      }
    })
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