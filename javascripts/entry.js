require.config({
  baseURL: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min"
  },
  shim: {
    "bootstrap":["jquery"]
  }
});


require(["main", "hbs", "bootstrap", "populate-songs", "get-more-songs", "dom-access"],
  function(main, Handlebars, bootstrap, first, second, dom) {
  }
);
