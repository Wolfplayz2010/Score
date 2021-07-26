var score=localStorage.getItem("P");
function getScore(){
document.getElementById("outdatedScore").innerHTML="score: "+score;
}
function back(){
window.location="activity_1.html";
}