x = 0;
y = 0;
screen_width=0;
screen_height=0;
soeak_data="";
to_number=""
draw_apple = "";
apple="";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
function preload(){
  apple=loadImage("apple.png");
}
 

recognition.onresult = function(event) {

 console.log(event); 
 content = event.results[0][0].transcript;
 to_number=Number(content);
 if(Number.isInteger(to_number)){
  document.getElementById("status").innerHTML="Started Drawing Apples";
  draw_apple="set"
 }else{
  document.getElementById("status").innerHTML="The speech has not recognized a number ";
 }

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 screen_width=window.innerWidth;
 screen_height=window.innerHeight;
 canvas=createCanvas(screen_width-150,screen_height-150)
 canvas.position(Math.floor(Math.random()*150))
}

function draw() {
  if(draw_apple == "set")
  {
    for(var i=1;i<=to_number;i++){
      x=Math.floor(Math.random()*700);
      y=Math.floor(Math.random()*400);
      image(apple,x,y,50,50);
      screen_width=Math.floor(Math.random()*700);
      screen_height=Math.floor(Math.random()*400);
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;
  speak_data=to_number+"Apples Drawn"
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
