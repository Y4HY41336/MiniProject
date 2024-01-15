const Audios = [
  {
    title: 'NeverGonnaGiveYouUp',
    artist: 'Rick Astley',
    file: 'musics/NeverGonnaGiveYouUp.MP3',
    image: 'https://i1.sndcdn.com/artworks-XJdVplPCbvDvJlH7-jF9c4A-t500x500.jpg'
  },
  {
    title: 'Toothless Dancing',
    artist: ':)',
    file: 'musics/ToothlessDancing.mp3',
    image: 'https://media.tenor.com/2l4-h42qnmcAAAAi/toothless-dancing-toothless.gif'
  },
  {
    title: 'BTS<3',
    artist: 'BTS',
    file: 'musics/FAKELOVE-BTS.mp3',
    image: 'https://m.media-amazon.com/images/M/MV5BNzkxOGE0NzgtYzAwYS00NWE4LTk4Y2EtMWE4YTQ0YjVlMTdiXkEyXkFqcGdeQXVyMTU3ODQxNDYz._V1_FMjpg_UX1000_.jpg'
  }
];

const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const image = document.getElementById('img');

const audio = new Audio();
let currentAudioIndex = 0;
let isPlaying = false;



function playAudio() {
  const currentAudio = Audios[currentAudioIndex];
  const AudioTitle = document.querySelector('.audio-info h2');
  const AudioArtist = document.querySelector('.audio-info h3');
  const progressBar = document.querySelector('.progress');

  audio.src = currentAudio.file;
  AudioTitle.textContent = currentAudio.title;
  AudioArtist.textContent = currentAudio.artist;
  image.src = currentAudio.image;
  progressBar.style.width = 0;

  audio.play();
  isPlaying = true;
  playButton.style.display = 'none';
  pauseButton.style.display = 'inline-block';
}

function pauseAudio() {
  audio.pause();
  isPlaying = false;
  playButton.style.display = 'inline-block';
  pauseButton.style.display = 'none';
}

function playNextAudio() {
  currentAudioIndex++;
  if (currentAudioIndex >= Audios.length) {
    currentAudioIndex = 0;
  }
  playAudio();
}

function playPrevAudio() {
  currentAudioIndex--;
  if (currentAudioIndex < 0) {
    currentAudioIndex = Audios.length - 1;
  }
  playAudio();
}

function updateProgressBar() {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const progressBar = document.querySelector('.progress');
  const progressPercent = (currentTime / duration) * 100;
  progressBar.style.width = `${progressPercent}%`;

  if (currentTime >= duration && isRepeat) {
    playAudio();
  } else if (currentTime >= duration) {
    pauseAudio();
  }
}



playButton.addEventListener('click', playAudio);
pauseButton.addEventListener('click', pauseAudio);
nextButton.addEventListener('click', playNextAudio);
prevButton.addEventListener('click', playPrevAudio);
audio.addEventListener('ended', playNextAudio);
audio.addEventListener('timeupdate', updateProgressBar);

playAudio();
pauseAudio();
