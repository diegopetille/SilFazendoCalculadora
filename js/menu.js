function openNav(){
    document.getElementById("nav").style.width='20%';
}

function closeNav(){
    document.getElementById("nav").style.width='0%';
}

function danceMonkey(){
    document.getElementById("logo").classList.add("danca");
    setTimeout(() => {
        document.getElementById("logo").classList.remove("danca");
      }, 1800);

      var audio = new Audio('../resources/som.mp3');
      audio.play();
    }
    
