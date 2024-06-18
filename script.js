document.addEventListener("DOMContentLoaded", () => {
    const email = 'm.nikolashina@innopolis.university';
    const encodedEmail = encodeURIComponent(email);
    const apiIDEndpoint = `https://fwd.innopolis.university/api/hw2?email=${encodedEmail}`;
    const apiComicEndpoint = `https://fwd.innopolis.university/api/comic`

    fetch(apiIDEndpoint)
        .then(response => response.text())
        .then(data => {
            return fetch(`${apiComicEndpoint}?id=${data.trim()}`);
        })
        .then(response => response.json())
        .then(comic => {
            const comicContainer = document.getElementById('comic-container');
            const title = document.createElement('h3');
            title.textContent = comic.safe_title;

            const img = document.createElement('img');
            img.src = comic.img;
            img.alt = comic.alt;

            const date = document.createElement('p');
            const comicDate = new Date(comic.year, comic.month - 1, comic.day);
            date.textContent = `Published on: ${comicDate.toLocaleDateString()}`;

            comicContainer.appendChild(title);
            comicContainer.appendChild(img);
            comicContainer.appendChild(date);
        })
        .catch(error => {
            console.error('Error:', error);
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Loading failed';
            document.getElementById('comic-container').appendChild(errorMessage);
        });
});

