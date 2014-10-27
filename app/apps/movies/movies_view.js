define(['application', 'hbs!apps/movies/templates/movie'], function(Application, MovieTemplate){
  Application.module('MoviesApp.Views', function(Views, Application, Backbone, Marionette, $, _){
    Views.MovieView = Marionette.ItemView.extend({
      template: MovieTemplate
    });

    Views.ListView = Marionette.CollectionView.extend({
      childView: Views.MovieView
    });
  });
  return Application.MoviesApp.Views;
});