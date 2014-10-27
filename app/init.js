require.config({
    baseUrl: '/app',
    deps: ['backbone.marionette', 'backbone.syphon', 'backbone.validation', 'application', 'main'],
    shim: {
        "backbone.marionette": {
            deps: ["backbone"]
        },
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        }
    },
    paths: {
        jquery: "/bower_components/jquery/dist/jquery",
        backbone: "/bower_components/backbone-amd/backbone",
        underscore: "/bower_components/underscore-amd/underscore",
        "backbone.marionette": "/bower_components/backbone.marionette/lib/backbone.marionette",
        "backbone.wreqr": "/bower_components/backbone.wreqr/lib/amd/backbone.wreqr",
        "backbone.syphon": "/bower_components/backbone.syphon/lib/amd/backbone.syphon",
        "backbone.babysitter": "/bower_components/backbone.babysitter/lib/amd/backbone.babysitter",
        "backbone.validation": "/bower_components/backbone.validation/dist/backbone-validation-amd",
        "backbone-relational": "/bower_components/backbone-relational/backbone-relational",
        handlebars: '/bower_components/require-handlebars-plugin/Handlebars',
        hbs: '/bower_components/require-handlebars-plugin/hbs'
    },
    hbs: {
        disableI18n: true
    }
});