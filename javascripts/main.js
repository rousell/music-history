define(["jquery", "hbs", "bootstrap", "populate-songs"],
  function($, Handlebars, bootstrap, first) {

    var moreSongsLoaded = false;

    first.getSongs(function(songs){
      require(['hbs!../templates/songs'], function(songTemplate) {
        $("#song").html(songTemplate(songs));
      });

    });


    $(document).on("click", ".button_delete", function() {
      $(this).closest("div").remove();
    });
  }
);

