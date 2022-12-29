let buttonColors = ["red", "blue", "green", "yellow"];
let gamePlayerColor=[]
let squenceColor=[]
let level=0;
let stage=false;

$(document).keydown(()=>{
    if(!stage){
        $('#level-title').text('Level - ' + level);
        console.log('hello')
         sequence();
    }
  
})

function playSound(randColors){
    const audio = new Audio('./sounds/'+randColors+".mp3");
    audio.play();
}


function sequence(){
    
    level++;
    $("#level-title").text("Level " + level);
    stage=true;
     const randNumber = Math.floor(Math.random()*buttonColors.length);
     const randColors=buttonColors[randNumber];

     squenceColor.push(randColors);

     $("#" + randColors).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randColors)
}

$('.btn').click(function(){
  
   const gameColor=$(this).attr('id');
  
   gamePlayerColor.push(gameColor);
   playSound(gameColor)

   checkAnswer(gamePlayerColor.length-1);
})
function startOver(){
    $('#level-title').text('Game Over Score - '+level);
     gamePlayerColor=[]
     squenceColor=[]
     level=0;
     stage=false;
     setTimeout(function(){
        $('#level-title').text('Press any key to continue');
     },1000)
}


function checkAnswer(currentLevel){
  if(gamePlayerColor[currentLevel]=== squenceColor[currentLevel]){
    console.log(gamePlayerColor,squenceColor)
    if(gamePlayerColor.length === squenceColor.length){
        sequence();
    }
  }else{
    $('#level-title').text('Game Over');
    $('.container').addClass('wrong');
    setInterval(()=>{
        $('.container').removeClass('wrong')
    })
    playSound('wrong');
    startOver()
  }
}