var  background = 0;
var bird = 0;
var cat = 0;
var cow = 0;

function startClassification () {
   navigator.mediaDevices.getUserMedia({audio:true});
   classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/CA6YrHbQH/model.json", modelReady)
}

function modelReady(){
   classifier.classify(gotResult)
}

function gotResult(error , result){
  if(error){
     console.log(error);
  }
  else{
       console.log(result);
       random_number_r = Math.floor(Math.random()*255) + 1;
       random_number_g = Math.floor(Math.random()*255) + 1;
       random_number_b = Math.floor(Math.random()*255) + 1;

       document.getElementById("detected").innerHTML = "Detected Background - "+background+" Detected Bird - "+bird+" Detected Cat - "+cat+" Detected Cow - " +cow;
       document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

       document.getElementById("animal_voices").innerHTML = "Detected Voice is - "+result[0].label;
       document.getElementById("animal_voices").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";


 }
}  