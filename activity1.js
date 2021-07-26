var score=0;
function updateScore(){
score=score+1;
document.getElementById("score").innerHTML=score;
}
function saveScore(){
localStorage.setItem("P",score);
}
function nextPage(){
window.location="activity_2.html";
}