define(['application', 'apps/movies/movies_controller'], function(Application, Controller){
  Application.module('MoviesApp', function(Movies, Application, Backbone, $, _){
    Movies.Router = Marionette.AppRouter.extend({
      appRoutes: {
        'list': 'showList'
      }
    });

    var API = {
      showList: function(){
        Controller.showList();
      }
    };

    Application.on('start', function(){
      new Movies.Router({controller: API});
    });

    return Movies
  })
});