let menuIcon = document.querySelector(".fa-bars");

let menuShow = document.querySelector(".menuShow");

let Show = false;

menuIcon.addEventListener('click',()=>{
  if(!Show){
    menuShow.style.display = "block";
    Show = true;
  }  
  else{
    menuShow.style.display = "none";
    Show = false;

  }
});

