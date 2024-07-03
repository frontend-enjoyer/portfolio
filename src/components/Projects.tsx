import React from 'react';

const Projects: React.FC = () => (
    <section id="projects">
        <h2>Projects</h2>
        <ul>
            <li>
                <h3>AI-platform for generating scoring works</h3>
                <p>
                    Position: backend developer. Stack: Go, SQL/noSQL databases, message brokers, orchestration systems
                    (Docker, k8s), swagger, unit-testing.
                </p>
            </li>
            <li>
                <h3>Telegram bot for dorms</h3>
                <p>Stack: Python, pytelegrambotapi, aiogram, fastAPI, postgresql.</p>
            </li>
            <li>
                <h3>A platform for students, graduates and staff of Innopolis University</h3>
                <p>Stack: C#, .NET, MySQL. Position: Backend developer.</p>
            </li>
        </ul>
    </section>
);

export default Projects;
