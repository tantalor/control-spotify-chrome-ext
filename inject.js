window.addEventListener("message", function(evt) {
  if (evt.data.type == 'from-content-script') {
    var request = JSON.parse(evt.data.text);
    var r = new Spotify.Bridge.Responder();
    r.trigger('player_play_toggle');
  }
});
