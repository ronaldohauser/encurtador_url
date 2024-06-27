const urlForm = document.getElementById('urlForm');
const originalUrlInput = document.getElementById('originalUrl');
const shortenedUrlContainer = document.getElementById('shortenedUrlContainer');
const shortenedUrl = document.getElementById('shortenedUrl');

urlForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const originalUrl = originalUrlInput.value;

    // Simulando requisição de API no backend para encurtar a URL
    const shortened = await shortenUrl(originalUrl);

    // URL encurtada
    shortenedUrl.href = shortened;
    shortenedUrl.textContent = shortened;
    shortenedUrlContainer.style.display = 'block';
});

// Função para encortar a URL
function shortenUrl(url) {
    return new Promise((resolve, reject) => {
        // Simulando um delay
        setTimeout(() => {
            // Resposta simulada
            const shortenedUrl = 'http://encurtada.url/' + Math.random().toString(36).substr(2, 5);
            resolve(shortenedUrl);
        }, 1000); // 1 segundo de delay
    });
}
