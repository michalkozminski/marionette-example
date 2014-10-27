define(['application', 'apps/movies/movies_view', 'apps/movies/entities/movie'], function(Application, View){
  Application.module('MoviesApp', function(MoviesApp, Application, Backbone, $, _){
    MoviesApp.Controller = {
      showList: function(){
        var movies = Application.request('movies:entities');
        movies.fetch().done(function(){
          var view = new View.ListView({collection: movies});
          Application.mainRegion.show(view);
        })
      }
    };
  });
  return Application.MoviesApp.Controller;
});