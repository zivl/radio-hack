const audioPlayer = document.querySelector('audio');
const circleText = document.querySelector('#circle textPath');
const svg = document.querySelector('.icon-play');
const svgPath = svg.querySelector('path');
const circleTextOptions = {play: "Play Broadcast. Play Broadcast. Play Broadcast. ", pause: "Pause Broadcast. Pause Broadcast. Pause Broadcast. ", offline: "Pause Broadcast. Pause Broadcast. Pause Broadcast. "};
window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
  // const data = JSON.parse(event.data);
  const data = event.data;
  switch (data.type) {
    case 'VOLUME_CHANGE':
      audioPlayer.volume = data.volume / 100;
      break;
    case 'TOGGLE_MUTE':
      handleMute();
      break;
  }
}

function handlePlay() {
  if (audioPlayer.muted) {
    circleText.innerHTML = circleTextOptions.play;
  } else {
    circleText.innerHTML = circleTextOptions.pause;
  }
  handleMute();
  togglePlay();
}

function handleMute() {
  audioPlayer.muted = !audioPlayer.muted
}

function togglePlay() {
  if( svg.classList.contains('play') ) {
    svg.classList.remove('play');
    TweenLite.to(svgPath, .4, {
    attr: { d: svg.getAttribute('data-play')}
    });
  }
  else {
    svg.classList.add('play');
    TweenLite.to(svgPath, .4, {
    attr: {d: svg.getAttribute('data-pause')}
    });
  }
}