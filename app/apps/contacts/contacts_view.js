define(['application', 'hbs!apps/contacts/templates/contact'], function(Application, ContactTemplate){
  Application.module('ContactsApp.Views', function(Views, Application, Backbone, Marionette, $, _){
    Views.ConctactView = Marionette.ItemView.extend({
      template: ContactTemplate
    , triggers: {
        'click': 'add'
      }
    });

    Views.ListView = Marionette.CollectionView.extend({
      childView: Views.ConctactView
    });
  });
  return Application.ContactsApp.Views;
});