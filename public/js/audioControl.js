const audioPlayer = document.querySelector('audio');
const circleText = document.querySelector('#circle text');
const circleTextPath = document.querySelector('#circle textPath');
const svg = document.querySelector('.icon-play');
const svgPath = svg.querySelector('path');
const audioState = {playing: false, muted: false, volume: 1};
window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
  // const data = JSON.parse(event.data);
  const data = event.data;
  switch (data.type) {
    case 'VOLUME_CHANGE':
      audioPlayer.volume = data.volume / 100;
      break;
    case 'TOGGLE_MUTE':
      toggleMute(data.value);
      break;
  }
}

function handlePlay(value) {
  value !== undefined ? audioState.playing = value : audioState.playing = !audioState.playing;
  if (audioState.playing) {
    circleText.setAttribute('data-mode', 'play');
  } else {
    circleText.setAttribute('data-mode', 'pause');
  }
  togglePlay();
  handleMute();
}

function toggleMute(value) {
  audioState.muted = value;
  handleMute();
}

function handleMute() {
  audioPlayer.muted = audioState.muted || !audioState.playing;
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