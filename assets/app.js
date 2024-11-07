function getEmail(e){
   e.preventDefault();
   var userEmail = document.getElementById("email").value
   var userPassword = document.getElementById("password").value
   if(userEmail === "" || userPassword === ""){
      alert("Invalid Email Or Password!");
   }
   else{
      alert("You are Logged In Successfully!");
   }
}
function onOver(){
 document.getElementById("join").style= "background-color: lightyellow; color: rgba(247, 247, 9, 0.774);"
}
function onOUt(){
document.getElementById("join").style= "color: lightyellow; background-color: rgba(247, 247, 9, 0.774);"
}
function newChange(){
document.getElementById("para").style = "font-family:cursive;"
}
function oldChange(){
document.getElementById("para").style = "font-family:'Courier New', Courier, monospace;"
}

var images = ["url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw9TiwX2a3GcuVD0lrepA9rYKlRHr8LVWyvA&s)", "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqfv4g9mBJz7of9LjaeykhZnRHBDXxAI6QxNzuxm8vtpXPfsUiBEkILZIlbIYmCRbZoSM&usqp=CAU)","url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZYJAFj5KNN6-F-p-8-mXt9x7-CUSe21I19A&s)"]
var currentIndex = 0;
function changeBackground(){
   document.getElementById("main").style.backgroundImage = images[currentIndex];
   currentIndex++;
   if(currentIndex >= images.length){
      currentIndex=0;
   }
}
setInterval(changeBackground, 3000);