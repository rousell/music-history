require.config({
  baseURL: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "firebase":"../lib/bower_components/firebase/firebase"
  },
  shim: {
    "bootstrap":["jquery"]
  }
});


require(["main", "hbs", "bootstrap", "firebase", "populate-songs", "dom-access"],
  function(main, Handlebars, bootstrap, firebase, first, dom) {
  }
);
