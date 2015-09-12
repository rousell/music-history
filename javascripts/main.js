define(["jquery", "hbs", "bootstrap", "populate-songs", "get-more-songs"],
  function($, Handlebars, bootstrap, first, second) {

    var moreSongsLoaded = false;

    first.getSongs(function(songs){
      require(['hbs!../templates/songs'], function(songTemplate) {
        $("#song").html(songTemplate(songs));
      });

    });



    $("#add_songs").one('click', function() {
      second.getSongs(function(songs){
        require(['hbs!../templates/songs'], function(songTemplate) {
        $("#song").append(songTemplate(songs));
      });
    });

    $(document).on("click", ".button_delete", function() {
      $(this).closest("div").remove();
    });


    });
  }
);

