var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    myAudio.pause()
  } else {
    myAudio.play();
  }
};
myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};


var myAudio2 = document.getElementById("Chapter1");
var isPlaying2 = false;

function togglePlay2() {
  if (isPlaying2) {
    myAudio2.pause()
  } else {
    myAudio2.play();
  }
};
myAudio2.onplaying = function() {
  isPlaying2 = true;
};
myAudio2.onpause = function() {
  isPlaying2 = false;
};

var myAudio3 = document.getElementById("Chapter2");
var isPlaying3 = false;

function togglePlay3() {
  if (isPlaying3) {
    myAudio3.pause()
  } else {
    myAudio3.play();
  }
};
myAudio3.onplaying = function() {
  isPlaying3 = true;
};
myAudio3.onpause = function() {
  isPlaying3 = false;
};