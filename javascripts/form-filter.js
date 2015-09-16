define(["lodash"], function(_) {
  return function(dataObj) {
    var uniqueArtist = _.chain(dataObj)
                        .uniq("artist")
                        .pluck("artist")
                        .value();
    var uniqueAlbum =  _.chain(dataObj)
                        .uniq("album")
                        .pluck("album")
                        .value();
    return {
      uniqueArtist: uniqueArtist,
      uniqueAlbum: uniqueAlbum
    };
    };
  }
);

