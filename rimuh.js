
document.querySelectorAll('.section-front').forEach(section => {
    section.previousElementSibling.addEventListener('click', () => {
        section.classList.toggle('expanded');
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