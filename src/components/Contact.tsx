import React from 'react';

interface ContactLinkProps {
    href: string;
    alt: string;
    text: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({ href, alt, text }) => (
    <li>
        <a href={href} target="_blank" rel="noopener noreferrer">
            <img src={`/src/${alt}_icon.png`} alt={alt} style={{ display: 'none' }} />
            {text}
        </a>
    </li>
);

const Contact: React.FC = () => (
    <section id="contact">
        <h2>Contacts</h2>
        <ul className="social-links">
            <ContactLink href="https://github.com/nikolashinamary" alt="GitHub" text="GitHub" />
            <ContactLink href="https://t.me/nikolashinamary" alt="Telegram" text="Telegram" />
            <ContactLink href="mailto:nikolashina05@icloud.com" alt="Email" text="Email" />
        </ul>
    </section>
);

export default Contact;
