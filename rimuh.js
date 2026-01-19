

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


new QRCode(document.getElementById("qrcode"), {
    text: "https://gqllahad.github.io/rimuh/rimuh.html",
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });