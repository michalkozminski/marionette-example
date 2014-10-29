define(['application'
      , 'hbs!apps/contacts/templates/contact'
      , 'hbs!apps/contacts/templates/contacts_list'], function(Application, ContactTemplate, ContactsListTemplate){
  Application.module('ContactsApp.Views', function(Views, Application, Backbone, Marionette, $, _){
    Views.ConctactView = Marionette.ItemView.extend({
      template: ContactTemplate
    , tagName: 'tr'
    , triggers: {
        'click': 'add'
      }
    });

    Views.ListView = Marionette.CompositeView.extend({
      template: ContactsListTemplate
      , childView: Views.ConctactView
      , childViewContainer: '.table'
    });
  });
  return Application.ContactsApp.Views;
});