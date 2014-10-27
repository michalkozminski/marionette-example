define(['application', 'apps/movies/movies_controller'], function(Application, Controller){
  Application.module('MoviesApp', function(Movies, Application, Backbone, $, _){
    //var API = {
    //  showList: function(){
    //    Controller.showList();
    //  }
    //};

    Application.on('start', function(){
      Controller.showList();
    });

    return Movies
  })
});