

// const images = document.querySelectorAll(".album img");
// const lightbox = document.getElementById("lightbox");
// const lightboxImg = document.getElementById("lightbox-img");

// images.forEach(img => {
//     img.addEventListener("click", () => {
//         lightboxImg.src = img.src;
//         lightbox.style.display = "flex";
//     });
// });

// lightbox.addEventListener("click", () => {
//     lightbox.style.display = "none";
// });

// openAlbum.addEventListener("click", () => {

//     openAlbum.style.display = "none";
// });

// const openAlbum = document.getElementById("outer-container");
// const flower = document.getElementById("flower");

// flower.addEventListener("click", () => {
//   flower.classList.add("bloom");

//   setTimeout(() => {
//     flower.classList.remove("bloom");
//     flower.classList.add("revert");

//     setTimeout(() => {
//       flower.classList.remove("revert");
//       flower.style.display = "none";
//       openAlbum.style.display = "none";

//     }, 3000);

//   }, 3000);
// });

const flower = document.getElementById("flower");
const outer = document.getElementById("outer-container");
const left = document.querySelector(".book-left");
const right = document.querySelector(".book-right");


const flowerBlooms = document.getElementById("flower-blooms");

const title = document.getElementById("albumTitle");
const items = document.getElementById("albumItems");
const rimuh = document.getElementById("rimuh");

const heart = document.getElementById("viewAll");
let scale = 1;             
const maxScale = 15;         
const increment = 1.5;    

flower.addEventListener("click", () => {
  flower.classList.add("bloom");

  setTimeout(() => {
    flower.classList.remove("bloom");
    flower.classList.add("revert");

    setTimeout(() => {
      flower.classList.remove("revert");
      flower.style.display = "none";

      left.classList.add("open-left");
      right.classList.add("open-right");

      setTimeout(() => {
        title.style.display = "block"; 
        items.style.display = "flex";
        heart.style.display = "block";

        setTimeout(() => {
          title.classList.add("show");
          items.classList.add("show");
          heart.classList.add("show");   
        }, 50); 
      }, 1000);

    }, 3000); 
  }, 3000);
});


function createBloomPetal() {
  const petal = document.createElement("div");
  petal.classList.add("bloom-petal");

  const x = (Math.random() - 0.5) * 400; // horizontal spread
  const y = (Math.random() - 0.5) * 400; // vertical spread
  const rot = Math.random() * 360 + "deg";

  petal.style.setProperty("--x", x + "px");
  petal.style.setProperty("--y", y + "px");
  petal.style.setProperty("--rot", rot);

  petal.style.left = "50%";
  petal.style.top = "50%";

  flowerBlooms.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 3000);
}

flower.addEventListener("click", () => {
  for (let i = 0; i < 20; i++) {
    setTimeout(createBloomPetal, i * 900);
  }
});

heart.addEventListener("click", () => {
  if (!heart.classList.contains("explode")) {
    scale += increment;
    heart.style.transform = `rotate(-45deg) scale(${scale})`;

    if (scale >= maxScale) {
      heart.classList.add("explode");

      setTimeout(() => {
        heart.classList.remove("explode");
        scale = 1;

        items.classList.remove("show");
        title.classList.remove("show");
        
        items.style.display = "none";
        title.style.display = "none";

        setTimeout(() => {
            heart.style.transform = `rotate(-45deg) scale(${scale})`;
            rimuh.classList.add("show");
    
    }, 500);
        
      }, 800); 
    }
  }
});


new QRCode(document.getElementById("qrcode"), {
    text: "https://gqllahad.github.io/rimuh/rimuh.html",
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });