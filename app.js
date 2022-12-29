let buttonColors = ["red", "blue", "green", "yellow"];

const squenceColor=[]
let level=0;


$(document).keydown(()=>{
    $('#level-title').text('Level - ' + level);
    console.log('hello')
     sequence();
})

function playSound(randColors){
    const audio = new Audio('./sounds/'+randColors+".mp3");
    audio.play();
}


function sequence(){
     const randNumber = Math.floor(Math.random()*buttonColors.length);
     const randColors=buttonColors[randNumber];

     squenceColor.push(randColors);

     $("#" + randColors).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randColors)
}


