define(['application', 'apps/contacts/contacts_view', 'apps/contacts/entities/users'], function(Application, View){
  Application.module('ContactsApp', function(Contacts, Application, Backbone, $, _){
    Contacts.Controller = {
      showList: function(movie){
        var contacts = Application.request('contacts:entities');
        var view = new View.ListView({collection: contacts});
        contacts.fetch().done(function(){
          Application.modalRegion.show(view);
        });

        view.on('childview:add', function(childView){
          movie.set('owner', childView.model);
          Application.modalRegion.empty();
        });

      }
    };
  });
  return Application.ContactsApp.Controller;
});