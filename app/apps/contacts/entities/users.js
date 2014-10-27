define(['application', 'backbone'], function(Application, Backbone) {

  var Contact = Backbone.Model.extend({});

  var ContactsCollection = Backbone.Collection.extend({
    model: Contact
    ,url: "/data/users.json"
  });

  Application.reqres.setHandler('contacts:entities', function(){
    return new ContactsCollection();
  });
});