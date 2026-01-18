
document.querySelectorAll('.section-front').forEach(section => {
    section.addEventListener('click', () => {
        section.style.maxHeight = section.style.maxHeight === '50vh' ? '0' : '50vh';
    });
});

new QRCode(document.getElementById("qrcode"), {
    text: "https://gqllahad.github.io/rimuh/rimuh.html",
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });