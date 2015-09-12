define(["jquery"],
  function($) {

    return {
      getSongs: function(doSomethingWithFirstData) {
        $.ajax({
          url:"javascripts/origsongs.json"
        }).done(function(dataComesFromjQuery) {
          doSomethingWithFirstData(dataComesFromjQuery);
          console.log("Data from jquery", dataComesFromjQuery);
        });
      }
    };

  }
);

