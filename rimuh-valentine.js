const press_no = document.getElementById("noo");
const press_yes = document.getElementById("yess");


const hero = document.getElementById("hero");
const hero_message = document.getElementById("hero-mess");

const imageContainer = document.querySelector(".image-container");

const images = [
  "s7.gif",
  "s5.gif",
  "s3.gif",
  "s6.gif",
  "s10.jpg",
  "s9.gif",
  "s4.gif"
];

let currentImage = 0;

let scale = 1;      
let dec_scale = 1.6;

const maxScale = 15;         
const increment = 1;    
const decrement = 0.1;


window.addEventListener("load", () => {
   document.querySelector(".hero").classList.add("show");
});

press_no.addEventListener("click", () => {

  currentImage = (currentImage + 1) % images.length;
  
  imageContainer.style.backgroundImage = `url('${images[currentImage]}')`;

  if(!press_yes.classList.contains("explode-valen")){
      scale += increment;
      dec_scale -= decrement;
      
      press_yes.style.transform = `scale(${scale})`;

      if (scale < 0.2) {scale = 0.2;}

      press_no.style.transform = `scale(${dec_scale})`;
      

      if(scale >= maxScale){
        press_no.classList.add("explode-valen");
      }
  }

  const maxX = window.innerWidth - press_no.offsetWidth;
  const maxY = window.innerHeight - press_no.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  press_no.style.position = "absolute";
  press_no.style.left = randomX + "px";
  press_no.style.top = randomY + "px";
});

press_yes.addEventListener("click", () => {
    press_yes.classList.add("explode-valen");
    
    hero.style.display = "none";
    document.querySelector(".hero-message").classList.add("show");
})

new QRCode(document.getElementById("qrcode"), {
    text: "https://gqllahad.github.io/rimuh/rimuh.html",
    width: 200,
    height: 200,
    colorDark: "#cf3d81",
    colorLight: "#a11313",
    correctLevel: QRCode.CorrectLevel.H
  });