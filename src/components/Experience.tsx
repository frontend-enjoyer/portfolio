import React from 'react';

const Experience: React.FC = () => (
    <section id="experience">
        <h2>Job experience</h2>
        <ul>
            <li>
                <h3>Diginavis LLC</h3>
                <p>Python-developer, June 2024 — now</p>
                <p>Developing high-load apps on python.</p>
            </li>
            <li>
                <h3>Croissant Studio LLC</h3>
                <p>Go-developer/QA, December 2023 — now</p>
                <p>
                    Development of a Restful service for generating and checking of scoring works using artificial intelligence.
                    Stack: Go, PostgreSQL, Docker, Open API (Swagger), Get, REST, rpc.
                </p>
            </li>
        </ul>
    </section>
);

export default Experience;
