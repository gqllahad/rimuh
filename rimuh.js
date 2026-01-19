

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

    }, 3000); 
  }, 3000);
});


new QRCode(document.getElementById("qrcode"), {
    text: "https://gqllahad.github.io/rimuh/rimuh.html",
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });