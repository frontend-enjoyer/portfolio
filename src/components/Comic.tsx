import React, { useEffect, useState } from 'react';

interface Comic {
    safe_title: string;
    img: string;
    alt: string;
    year: string;
    month: string;
    day: string;
}

const Comic: React.FC = () => {
    const [comic, setComic] = useState<Comic | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchComic = async () => {
            try {
                const email = 'm.nikolashina@innopolis.university';
                const encodedEmail = encodeURIComponent(email);
                const apiIDEndpoint = `https://fwd.innopolis.university/api/hw2?email=${encodedEmail}`;
                const apiComicEndpoint = `https://fwd.innopolis.university/api/comic`;

                const idResponse = await fetch(apiIDEndpoint);
                const id = await idResponse.text();

                const comicResponse = await fetch(`${apiComicEndpoint}?id=${id.trim()}`);
                const comicData = await comicResponse.json();

                setComic(comicData);
            } catch (error) {
                setError('Loading failed');
            }
        };

        fetchComic();
    }, []);

    if (error) {
        return <div className="comic-container"><p>{error}</p></div>;
    }

    if (!comic) {
        return <div className="comic-container"><p>Loading...</p></div>;
    }

    const comicDate = new Date(parseInt(comic.year), parseInt(comic.month) - 1, parseInt(comic.day));

    return (
        <section id="comic">
            <h2>Comic</h2>
            <div className="comic-container">
                <h3>{comic.safe_title}</h3>
                <img src={comic.img} alt={comic.alt} />
                <p>Published on: {comicDate.toLocaleDateString()}</p>
            </div>
        </section>
    );
};

export default Comic;
