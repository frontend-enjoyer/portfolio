document.addEventListener("DOMContentLoaded", () => {
    const email = 'm.nikolashina@innopolis.university';
    const apiEndpoint = `https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(email)}`;

    fetch(apiEndpoint)
        .then(response => response.text())
        .then(data => {
            const comicId = data.trim();
            return fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
        })
        .then(response => response.json())
        .then(comic => {
            displayComic(comic);
        })
        .catch(error => {
            console.error('Error fetching the comic:', error);
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Failed to load comic.';
            document.getElementById('comic-container').appendChild(errorMessage);
        });
});

function displayComic(comic) {
    const comicContainer = document.getElementById('comic-container');

    // Sanitize comic details to prevent XSS
    const title = document.createElement('h3');
    title.textContent = comic.safe_title;

    const img = document.createElement('img');
    img.src = comic.img;
    img.alt = comic.alt;
    img.title = comic.alt;

    const date = document.createElement('p');
    const comicDate = new Date(comic.year, comic.month - 1, comic.day);
    date.textContent = `Published on: ${comicDate.toLocaleDateString()}`;

    comicContainer.appendChild(title);
    comicContainer.appendChild(img);
    comicContainer.appendChild(date);
}
