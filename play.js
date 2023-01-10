// document.write("kickk");
 var kicker=document.getElementById("player");
 var ball=document.getElementById("ball");

function kick()
{
    alert("kick");
// kicker.style.border="2px solid black";
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

  