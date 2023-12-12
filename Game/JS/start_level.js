let start_Button = document.getElementById("start_1");




var levelCount = localStorage.getItem('levelCount');


if (levelCount === null) {
  var levelCount = 0;
  localStorage.setItem('level_beat', 0);

}else{

  levelCount = parseInt(levelCount); 
}
levelCount++;

localStorage.setItem('levelCount', levelCount);



var nxtLvl = "Level" + levelCount + ".html"

  
  function startRound(){
  
    window.location.href = nxtLvl;
    levelCount++;
  
  }
  start_Button.addEventListener("click", startRound);
