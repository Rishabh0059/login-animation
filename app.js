document.addEventListener("DOMContentLoaded", function () {
  const leftPart = document.querySelector('.left-part');
  const preloader = document.querySelector('.preloader');
  const rightPart = document.querySelector('.right-part');


  setTimeout(function () {
    leftPart.classList.add('shrink-complete'); 

   
    setTimeout(function () {
      preloader.style.visibility = "visible";
      preloader.style.opacity = "1";


      preloader.style.animation = "moveToTopLeft 1.5s ease forwards";

     
      setTimeout(function () {
        preloader.style.display = "none"; 
        
    
        setTimeout(function () {
          rightPart.style.transform = "translateY(0)";
          rightPart.style.opacity = "1";
        }, 100); 

      }, 1500); 

    }, 500); 
  }, 700); 
});





const loginButton = document.querySelector('.log-button');



loginButton.addEventListener('click', function() {

  this.classList.add('button--loading');


  setTimeout(function() {
    const rightPart = document.querySelector('.right-part');
    rightPart.classList.add('animate');
  }, 1000);


  setTimeout(function() {
    const leftPartImg = document.querySelector('.left-part img');
    leftPartImg.classList.add('animate');
  }, 1500);


  

  setTimeout(function() {
    const loginButton = document.querySelector('.log-button');
    loginButton.classList.remove('button--loading');
  }, 1000);

});


