Webcam.set({
width:310,

height:300,

image_format:"png",

png_quality:120,

constraints:{
    facingMode:"enviorment"
}
});

camera=document.getElementById("cam");
 Webcam.attach("cam");

 function snap(){
Webcam.snap( function (data_uri){
document.getElementById("result").innerHTML='<img id="cap_img" src="'+data_uri+'">';
})
 }

console.log("ml5 version:",ml5.version);

classifier = ml5.imageClassifier('MobileNet',modalLoded)

function modalLoded(){
    console.log("MODEL HAS LOADED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
}

function analyze(){
img = document.getElementById("cap_img")

classifier.classify(img,GotRESULT)
}

function GotRESULT(error, result){
if(error){
console.error(error)
}
else{
   console.log(result) 
document.getElementById("object_name").innerHTML=result[0].label;
}
}