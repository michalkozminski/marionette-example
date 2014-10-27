define(['application', 'apps/contacts/contacts_view', 'apps/contacts/entities/users'], function(Application, View){
  Application.module('ContactsApp', function(Contacts, Application, Backbone, $, _){
    Contacts.Controller = {
      showList: function(){
        var contacts = Application.request('contacts:entities');
        var view = new View.ListView({collection: contacts});
        contacts.fetch().done(function(){
          Application.mainRegion.show(view);
        });

        view.on('childview:add', function(childView){
          alert('selected:' + childView.model.get('firstName'));
        });

      }
    };
  });
  return Application.ContactsApp.Controller;
});