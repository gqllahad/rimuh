const btn = document.getElementById("runaway-btn");
const moveDistance = 150;
let crt_btn = document.getElementById("correct-btn");
let snd_btn = document.getElementById("second-btn");
let miruh_btn = document.getElementById("fourth-btn");
const gif = document.getElementById("hoverGif");

const photos = document.querySelectorAll(".carousel-photo");
const nextBtn = document.getElementById("next-photo");
let currentIndex = 0;

const firstLayer = document.querySelector(".first-layer");
const secondLayer = document.querySelector(".second-layer");
const thirdLayer = document.querySelector(".third-layer");
const fourthLayer = document.querySelector(".fourth-layer");


const wrapper = document.querySelector('.slider-wrapper');
const slide_photos = document.querySelectorAll('.slider-photo');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

const messageElement = document.getElementById("final-message");
const text = messageElement.textContent;
messageElement.textContent = "";

let slide_currentIndex = 0;
const total = slide_photos.length;

crt_btn.addEventListener("mouseenter", () => {
  gif.classList.add("fade-out");
  setTimeout(() => {
    gif.src = "Untitled design.gif";
    gif.classList.remove("fade-out");
  }, 300);
});

crt_btn.addEventListener("mouseleave", () => {
  gif.classList.add("fade-out");
  setTimeout(() => {
    gif.src = "Untitled design (1).gif";
    gif.classList.remove("fade-out");
  }, 300);
});


  document.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const btnX = rect.left + rect.width / 2;
    const btnY = rect.top + rect.height / 2;
    const distX = e.clientX - btnX;
    const distY = e.clientY - btnY;
    const distance = Math.sqrt(distX ** 2 + distY ** 2);

    if (distance < 100) {
      const angle = Math.atan2(distY, distX);
      const newX = btn.offsetLeft - Math.cos(angle) * moveDistance;
      const newY = btn.offsetTop - Math.sin(angle) * moveDistance;

      gsap.to(btn, {
        duration: 0.4,
        x: newX - btn.offsetLeft,
        y: newY - btn.offsetTop,
        ease: "power2.out"
      });
    }
  });

  window.addEventListener("resize", () => {
    gsap.set(btn, { x: 0, y: 0 });
  });


  crt_btn.addEventListener("click", () => {
  gsap.to(firstLayer, {
    duration: 0.6,
    opacity: 0,
    ease: "power2.out",
    onComplete: () => {
      firstLayer.style.display = "none";

    
      secondLayer.style.display = "flex";
      gsap.fromTo(
        secondLayer,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.inOut" }
      );
    },
  });
});

snd_btn.addEventListener("click", () => {
      gsap.to(secondLayer, {
    duration: 0.6,
    opacity: 0,
    ease: "power2.out",
    onComplete: () => {
      secondLayer.style.display = "none";

      thirdLayer.style.display = "flex";
      
      gsap.fromTo(
        thirdLayer,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.inOut" }
      );

      const firstPhoto = photos[currentIndex];
      firstPhoto.style.opacity = 0;
      firstPhoto.style.y = -300; 
      firstPhoto.classList.add("active");

      gsap.to(firstPhoto, {
        duration: 0.8,
        y: 0,
        opacity: 1,
        ease: "bounce.out"
      });
    },
  });
});


 miruh_btn.addEventListener("click", () => {
  gsap.to(thirdLayer, {
    duration: 0.6,
    opacity: 0,
    ease: "power2.out",
    onComplete: () => {
      thirdLayer.style.display = "none";

    
      fourthLayer.style.display = "flex";
      gsap.fromTo(
        fourthLayer,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.inOut" }
      );
    },
  });

  let i = 0;
function typeWriter() {
  if (i < text.length) {
    messageElement.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 150); 
  }
}

typeWriter();
});

nextBtn.addEventListener("click", () => {
  
   const currentPhoto = photos[currentIndex];
  
  gsap.to(currentPhoto, {
    duration: 0.8,
    y: 300,     
    opacity: 0,
    ease: "power2.in",
    onComplete: () => {
      currentPhoto.classList.remove("active");
      currentPhoto.style.y = 0; 

      currentIndex = (currentIndex + 1) % photos.length;
      const nextPhoto = photos[currentIndex];
      nextPhoto.style.opacity = 0;
      nextPhoto.style.y = -300; 
      nextPhoto.classList.add("active");

      gsap.to(nextPhoto, {
        duration: 0.8,
        y: 0,
        opacity: 1,
        ease: "bounce.out",
      });
    },
  });
});

// sliders

function updateSlider() {
  const offset = -slide_currentIndex * 400;
  wrapper.style.transform = `translateX(${offset}px)`;
}

leftArrow.addEventListener('click', () => {
  slide_currentIndex = (slide_currentIndex - 1 + total) % total;
  updateSlider();
});

rightArrow.addEventListener('click', () => {
  slide_currentIndex = (slide_currentIndex + 1) % total;
  updateSlider();
});






