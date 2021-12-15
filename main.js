function setup(){
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(f);
    s=window.speechSynthesis;
}
function cc(){
    background("white");
}
function preload(){
    gh=ml5.imageClassifier("DoodleNet");
}
function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
}
}
function f(){
    gh.classify(canvas,goh);
}
function goh(error,results){
if(error){
console.error();
}
else{
    console.log(results);
    document.getElementById("name").innerHTML="name: "+results[0].label;
    document.getElementById("confidence").innerHTML="confidence: "+Math.round(results[0].confidence*100)+"%";
    u=new SpeechSynthesisUtterance(results[0].label);
    s.speak(u);
}
}