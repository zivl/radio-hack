const audioPlayer = document.querySelector('audio');

window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
  // const data = JSON.parse(event.data);
  const data = event.data;
  switch (data.action) {
    case 'volume':
      audioPlayer.volume = data.value;
      break;
  }
}