class Sound {
constructor() {
    this.sound = document.createElement("audio");
    this.sound.src = "#";
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
}


display() {
   document.body.appendChild(this.sound);
   this.play = function(){ 
       this.sound.play(); 
    } 
    this.stop = function(){
         this.sound.pause(); 
        }
     }
}