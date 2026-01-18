
document.querySelectorAll('.section-front').forEach(section => {
    section.addEventListener('click', () => {
        section.style.maxHeight = section.style.maxHeight === '50vh' ? '0' : '50vh';
    });
});

if (new URLSearchParams(window.location.search).get('source') === 'qr') {
    alert('Thanks for scanning the QR code!');
}