define(['application', 'backbone'], function(Application, Backbone) {

  var Movie = Backbone.Model.extend({});

  var MoviesCollection = Backbone.Collection.extend({
    model: Movie
   ,url: "/data/movies.json"
  });

  Application.reqres.setHandler('movies:entities', function(){
    return new MoviesCollection();
  });
});