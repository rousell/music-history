define(["jquery"],
  function($) {

    return {
      getSongs: function(doSomethingWithSecondData) {
        $.ajax({
          url:"javascripts/moresongs.json"
        }).done(function(dataComesFromjQuery2) {
          doSomethingWithSecondData(dataComesFromjQuery2);
          console.log("2nd data from jquery", dataComesFromjQuery2);
        });
      }
    };

  }
);

