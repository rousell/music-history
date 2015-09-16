define(["jquery"],
  function($) {

    return {
      getSongs: function(doSomethingWithFirstData) {
        $.ajax({
          url: "https://music-hist.firebaseio.com/.json"
        }).done(function(dataComesFromjQuery) {
          doSomethingWithFirstData(dataComesFromjQuery);
          // console.log("Data from jquery", dataComesFromjQuery);
        });
      }
    };

  }
);

