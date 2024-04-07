var url = 'https://stream.wikimedia.org/v2/stream/recentchange';
var eventSource = new EventSource(url);

eventSource.onmessage = function(event) {
  var data = JSON.parse(event.data);
  if (data.server_name == 'sv.wikipedia.org') {
    console.log(event)
  }
}
