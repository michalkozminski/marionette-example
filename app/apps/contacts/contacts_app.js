define(['application', 'apps/contacts/contacts_controller'], function(Application, Controller){
  Application.module('ContactsApp', function(Contacts, Application, Backbone, $, _){

    Application.on('contacts:list:show', function(movie){
      Controller.showList(movie);
    });

    return Contacts
  })
});