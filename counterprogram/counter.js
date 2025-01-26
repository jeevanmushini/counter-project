const increasebtn=document.getElementById("increasebtn");
const resetbtn=document.getElementById("resetbtn");
const decreasebtn=document.getElementById("decreasebtn");
const countlabel=document.getElementById("countlabel");
var count=0;
increasebtn.onclick=function(){
    count++;
    countlabel.textContent=count;
}
decreasebtn.onclick=function(){
    count--;
    countlabel.textContent=count;
}
resetbtn.onclick=function(){
    count=0;
    countlabel.textContent=count;
}