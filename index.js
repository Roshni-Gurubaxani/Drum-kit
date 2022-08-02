
var buttons = document.querySelectorAll(".drum");
var len = buttons.length;
//var audio = new Audio("sounds/tom-1.mp3");

// adding EventListener to all the buttons
for(var i = 0; i<len; i++){
  buttons[i].addEventListener("click", function(){
    var letter = this.textContent;
    listener(letter);
    animation(letter);
  });
}

// adding EventListener "keypress" to entire document
document.addEventListener("keypress",function(event){
  listener(event.key);
  animation(event.key);
})

// listener for the event "click" and "keypress"
function listener(letter){
  switch (letter) {
    case 'w':
      var crashAudio = new Audio("sounds/crash.mp3");
      crashAudio.play();
      break;

      case 'a':
      var kickAudio = new Audio("sounds/kick-bass.mp3");
      kickAudio.play();
      break;

      case 's':
      var snareAudio = new Audio("sounds/snare.mp3");
      snareAudio.play();
      break;

      case 'd':
      var tom1Audio = new Audio("sounds/tom-1.mp3");
      tom1Audio.play();
      break;

      case 'j':
      var tom2Audio = new Audio("sounds/tom-2.mp3");
      tom2Audio.play();
      break;

      case 'k':
      var tom3Audio = new Audio("sounds/tom-3.mp3");
      tom3Audio.play();
      break;

      case 'l':
      var tom4Audio = new Audio("sounds/tom-4.mp3");
      tom4Audio.play();
      break;

    default: console.log(letter);
  }
}

function animation(letter){
  var activeButton = document.querySelector("."+letter);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}
