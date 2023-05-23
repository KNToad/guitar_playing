const sections = [0,
            document.getElementsByClassName('description')[0].offsetTop,
            document.getElementsByClassName('slideShow')[0].offsetTop,
            document.getElementsByClassName('skills')[0].offsetTop,
            document.getElementsByClassName('requires')[0].offsetTop,
            document.getElementsByClassName('references')[0].offsetTop];

var slider = document.getElementById('slider');

current = [-1];
upBtnDisplay = false;

window.addEventListener('scroll', function() {sectorChanging(sections, slider, current);});
[].forEach.call(document.getElementsByClassName("nav__link"), function (elem) {elem.addEventListener('click', function() {sectorChanging(sections, slider, current)})});


console.log(window.innerHeight)
function sectorChanging(sections, slider, current) {
  var y = window.pageYOffset+54;
  var btn = document.getElementById('upBtn');

  if(y > window.innerHeight*1.1 && !upBtnDisplay){
    upBtnRaise(btn,0);
    upBtnDisplay=true;
  }
  else if(y<=window.innerHeight*1.1 && upBtnDisplay){
    upBtnSetter(btn,60);
    upBtnDisplay=false;
  }

  if(current[0]<=0 && y<sections[1]){
    return;
  }
  else if(current[0]>0 && y< sections[1]){
    hidingSlider(slider,54);
    current[0] = 0;
  }
  else if(current[0]==1 && y<sections[2] && y>=sections[1]){
    return;
  }
  else if(current[0]!=1 && y<sections[2] && y>=sections[1]){
    barChanging(slider,current,1);
    current[0] = 1;
  }
  else if(current[0]==2 && y<sections[3] && y>=sections[2]){
    return;
  }
  else if(current[0]!=2 && y<sections[3] && y>=sections[2]){
    barChanging(slider,current,2);
    current[0] = 2;
  }
  else if(current[0]==3 && y<sections[4] && y>=sections[3]){
    return;
  }
  else if(current[0]!=3 && y<sections[4] && y>=sections[3]){
    barChanging(slider,current,3);
    current[0] = 3;
  }
  else if(current[0]==4 && y<sections[5] && y>=sections[4]){
    return;
  }
  else if(current[0]!=4 && y<sections[5] && y>=sections[4]){
    barChanging(slider,current,4);
    current[0] = 4;
  }
  else if(current[0]==5 && y>=sections[5]){
    return;
  }
  else if(current[0]!=5 && y>sections[5]){
    barChanging(slider,current,5);
    current[0] = 5;
  }

  function barChanging(slider,current,new_p) {
    if(current[0] <= 0) {
      slider.style.left = 16.8*(new_p-1)+'%';
      slider.style.display = "block";
      slider.style.height = "0px";
      raiseSlider(slider,0);
    }
    else {
      var frame = 16.8*(new_p-current[0])/30;
      moveSlider(slider,frame,(new_p-1)*16.8,(current[0]-1)*16.8)
    }

    function raiseSlider(slider,pos) {
      if(pos!=54) {
        slider.style.opacity = String(Math.sqrt((pos+2)/54));
        slider.style.height = (pos+2)+'px';
        setTimeout(raiseSlider,3,slider,pos+2);
      }
    }
    function moveSlider(slider,frame,new_p,pos) {
      if(Math.abs(pos.toFixed(1)) != new_p.toFixed(1)) {
        slider.style.left = (pos+frame)+"%";
        console.log(pos.toFixed(0),new_p.toFixed(0))
        setTimeout(moveSlider,3,slider,frame,new_p,pos+frame);
      }
    }
  }

  function hidingSlider(slider,pos) {
    if(pos!=0) {
      slider.style.opacity = String(Math.sqrt((pos-2)/54));
      slider.style.height = (pos-2)+'px';
      setTimeout(hidingSlider,3,slider,pos-2);
    }
  }

  function upBtnRaise(btn,pos){
    if(pos!=60) {
      btn.style.opacity = String(Math.sqrt((pos+2)/54));
      btn.style.bottom = (pos+2)+'px';
      setTimeout(upBtnRaise,5,btn,pos+2);
    }
  }
  function upBtnSetter(btn,pos){
    if(pos!=0) {
      btn.style.opacity = String(Math.sqrt((pos-2)/54));
      btn.style.bottom = (pos-2)+'px';
      setTimeout(upBtnSetter,5,btn,pos-2);
    }
  }
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
