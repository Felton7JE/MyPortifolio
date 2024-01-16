document.addEventListener('DOMContentLoaded', function () {
    const textCarousel = document.getElementById('text-carousel');
    const textItems = document.querySelectorAll('.text-item');
    let currentIndex = 0;

    function showText(index) {
        textItems.forEach((item, i) => {
            item.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextText() {
        currentIndex = (currentIndex + 1) % textItems.length;
        showText(currentIndex);
    }

    // Inicializa o carrossel
    showText(currentIndex);

    // Configura um intervalo para avançar para o próximo item a cada 3 segundos
    setInterval(nextText, 10000);
});
