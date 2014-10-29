define(['application', 'apps/movies/movies_view', 'apps/movies/entities/movie'], function(Application, View){
  Application.module('MoviesApp', function(MoviesApp, Application, Backbone, $, _){
    MoviesApp.Controller = {
      showList: function(){
        var movies = Application.request('movies:entities');
        var view = new View.ListView({collection: movies});

        movies.fetch().done(function(){
          Application.mainRegion.show(view);
        });

        view.on('childview:remove', function(childView) {
          movies.remove(childView.model)
        });

        view.on('childview:member:add', function(childView){
          Application.trigger('contacts:list:show', childView.model);
        });

      }
    };
  });
  return Application.MoviesApp.Controller;
});