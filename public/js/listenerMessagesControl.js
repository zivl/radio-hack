const audioPlayer = document.querySelector('audio');

window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
  // const data = JSON.parse(event.data);
  const data = event.data;
  switch (data.type) {
    case 'VOLUME_CHANGE':
      audioPlayer.volume = data.volume / 100;
      break;
  }
}