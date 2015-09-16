define(["jquery", "hbs", "bootstrap", "populate-songs", "form-filter"],
  function($, Handlebars, bootstrap, first, filter) {

    var moreSongsLoaded = false;

// POPULATE SONGS

    first.getSongs(function(songs){
      require(['hbs!../templates/songs'], function(songTemplate) {
        $("#song").html(songTemplate(songs));
      });
    });

// POPULATE ARTIST DROPDOWN

    first.getSongs(function(songs){
      require(['hbs!../templates/artists'], function(songTemplate) {
        $("#artist-list").html(songTemplate({artist: filter(songs.songs).uniqueArtist}));
      });
    });

// POPULATE ALBUM DROPDOWN

    first.getSongs(function(songs){
      require(['hbs!../templates/albums'], function(songTemplate) {
        $("#album-list").html(songTemplate({album: filter(songs.songs).uniqueAlbum}));
      });
    });

// DELETE BUTTON FXNALITY

    $(document).on("click", ".button_delete", function() {
      $(this).closest("div").remove();
    });
  }
);

