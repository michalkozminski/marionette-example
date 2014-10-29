define(['application', 'hbs!apps/movies/templates/movie'], function(Application, MovieTemplate){
  Application.module('MoviesApp.Views', function(Views, Application, Backbone, Marionette, $, _){
    Views.MovieView = Marionette.ItemView.extend({
      template: MovieTemplate
    , ui: {
        owner: '.js-owner'
      }

    , triggers: {
        'click .js-remove': 'remove'
      , 'click .js-add-member': 'member:add'
      }

    , modelEvents: {
        'change:owner': 'updateOwner'
      }

    , updateOwner: function(){
        this.$el.find(this.ui.owner).html(this.model.get('owner').get('firstName'));
      }
    });

    Views.ListView = Marionette.CollectionView.extend({
      childView: Views.MovieView
    });
  });
  return Application.MoviesApp.Views;
});