
 var kicker=document.getElementById("player");
 var ball=document.getElementById("ball");


function move()
{
ball.style.animation="ballMove 3s";
}

var score=0;

document.getElementsById("dispScore").innerText=1;
function drag(event) {
    event.dataTransfer.setData('text',event.target.id);
  }

  function allow (event) {
    event.preventDefault();
  }
  

  function drop(event) {
    event.preventDefault();
    var gol= event.dataTransfer.getData('text');
    alert("Goal!")
    document.getElementById("status").innerText="Bravo!";

    score=score+1;
  }

  //----------------- FB sound -------------------------------------
  
  function FBsound_play()
  {
   document.getElementById("FBsound").play();
   document.getElementById("FBsound-img").src="Football/Muted.jpg";
  }

  
  function FBsound_stop()
  {
   document.getElementById("FBsound").pause();
   document.getElementById("FBsound-img").src='unMuted.jpg';
  }