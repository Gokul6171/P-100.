var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


}

var speechRecognition = window.webkitspeechRecognition;
 var recognition = new speechRecognition();
 function start()
 {
     document.getElementById("textbox").innerHTML = "";
     recognition.start();
 }

 recognition.onresult = function(event) {

 console.log(event);
     
 var content = event.results[0][0].transcript;
 console.log(content);
       speak();

 document.getElementById("textbox").innerHTML = content;
 }

 function speak(){
     var synth = window.SpeechSynthesis;

     speak_data = document.getElementById("textbox").Value

     speak_data = "Taking you seifie in 6 seconds";

     var utterThis = new SpeechSynthesisUtterance(speak_data);

     synth.speak(utterThis);
     Webcam.attach(camera);

     setTimeout(function()
     {
         take_snapshot();
         save();
     },6000);
 } 

 WebKitCSSMatrix.set({
     width:360,
     height:250,
     image_format : 'png',
     png_quality:90
 });
 camera = document.getElementById("camera");

 function take_snapshot()
 {
     Webcam.snap(function(data_uri) {
         document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
     });
 }

 if(content =="take my selfie")
 {
     console.log("taking selfie --- ");
     speak();
 }