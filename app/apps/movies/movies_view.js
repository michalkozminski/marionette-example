define(['application'
        , 'hbs!apps/movies/templates/movie'
        , 'hbs!apps/movies/templates/movies_list'
], function(Application, MovieTemplate, MoviesListTemplate){
  Application.module('MoviesApp.Views', function(Views, Application, Backbone, Marionette, $, _){
    Views.MovieView = Marionette.ItemView.extend({
      template: MovieTemplate
    , tagName: 'tr'
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

    Views.ListView = Marionette.CompositeView.extend({
      template: MoviesListTemplate
    , childView: Views.MovieView
    , childViewContainer: '.table'
    });
  });
  return Application.MoviesApp.Views;
});