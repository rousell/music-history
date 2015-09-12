define([],
  function() {
    return {
      doStuff: function(data) {
        for (var i = 0; i < data.length; i++) {
          $("#song").append("<div class='fun_stuff' id='song" + i + "'><span class='song-header'>" + data[i].title + "</span><ul><li>" + data[i].artist + " | " + "</li><li> " + data[i].album + "</li></ul><button class='button_delete'>Delete!</button></div>");
        }
      }
    };
  }
);
