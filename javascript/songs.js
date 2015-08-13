$(document).ready(function() {

  $.ajax({
    url:"javascript/origsongs.json"
  }).done(songCallback);

  $("#add_songs").click(function() {
      $.ajax({
        url:"javascript/moresongs.json"
      }).done(songCallback);
  });


  function songCallback (songList) {
    for (var i = 0; i < songList.songs.length; i++) {
      var currentSong = songList.songs[i];
      $("#songs_here").append("<div class='fun_stuff' id='song" + i + "'><span class='song-header'>" + currentSong.title + "</span><ul><li>" + currentSong.artist + " | " + "</li><li>" + currentSong.album + "</li></ul><button class='button_delete'>Delete!</button></div>")
    }
  }

  $(document).on("click", ".button_delete", function() {
    $(this).closest("div").remove();
  })

  // $("#button_delete").click(function() {
  //   $("#delete_me").remove();
  // })



// var songs = [];

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// songs.unshift("Deep Blue > by Arcade Fire on the album The Suburbs");
// songs.push("High and Dry > by Radiohead on the album The Bends");

// var songName = [];
// var artistName = [];
// var albumName = [];
// var genreName = [];
// var element = document.getElementById("songs_here");

// for (var i = 0; i < songs.length; i++) {
//   // Remove Characters
//   var currentSong = songs[i];
//   currentSong = currentSong.replace(/[!*@(]/g, "");
//   currentSong = currentSong.replace(/>/g, "-");
//   console.log(currentSong);

//   // Song Name
//   songName = currentSong.slice(0, currentSong.indexOf("-") - 1);

//   // Artist Name
//   artistName = currentSong.slice(currentSong.indexOf("by") + 3, currentSong.indexOf("on ") - 1);
//   console.log(artistName);

//   // Album Name
//   albumName = currentSong.slice(currentSong.indexOf("album") + 5);

//   // Genre


//   // InnerHTML Element
//   element.innerHTML += "<div class='fun_stuff'><span class='song-header'>" + songName + "</span><ul><li>" + artistName + " | " + "</li><li>" + albumName + " | " + "</li><li>" + " " + genreName + "<li></ul></div>";

// }





});








