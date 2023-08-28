//MOUSE CLICKES
var noOfButtons = document.querySelectorAll(".drum").length;
for(var i=0; i<noOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", gotClicked); 
    function gotClicked() {
        console.log(this.innerHTML);
        /* this.style.color = "white"; */
        var clicked = this.innerHTML;
        makeSound(clicked);
        buttonAnimation(clicked);
    }
}

//KEYBOARD KEYS
document.addEventListener("keydown", function(event) {
    console.log(event);
    var Pressed = event.key;
    makeSound(Pressed);
    buttonAnimation(Pressed);
});


//WHICH AUDIO TO PLAY
function makeSound(key) {
    switch (key) {
        case "w":
            var wAudio = new Audio ("sounds/tom-1.mp3");
            wAudio.play();
            break;
    
        case "a":
            var aAudio = new Audio ("sounds/tom-2.mp3");
            aAudio.play();
            break;
    
        case "s":
            var sAudio = new Audio("sounds/tom-3.mp3");
            sAudio.play();
            break;
    
        case "d":
            var dAudio = new Audio("sounds/tom-4.mp3");
            dAudio.play();
            break;
    
        case "j":
            var jAudio = new Audio("sounds/crash.mp3");
            jAudio.play();
            break;
    
        case "k":
            var kAudio = new Audio("sounds/kick-bass.mp3");
            kAudio.play();
            break;
    
        case "l":
            var lAudio = new Audio("sounds/snare.mp3");
            lAudio.play();
            break;
    
        default:
            console.log(drumButton);
            break;
    }
}


function buttonAnimation(currentKey) {
    var activeKey = document.querySelector("." + currentKey);
    activeKey.classList.add("pressed");
    
    setTimeout(function() {
        activeKey.classList.remove("pressed");
    }, 150);
}