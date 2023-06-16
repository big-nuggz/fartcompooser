var sound = new Howl({
    src: ['sound/mjoh.ogg']
})

var play_button = document.getElementById("play-button");
play_button.onclick = function(){
    sound.play();
}