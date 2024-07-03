import React from 'react';
import Header from './components/Header';
import Bio from './components/Bio';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Comic from './components/Comic';
import Contact from './components/Contact';
import './styles.css';

const App: React.FC = () => (
    <div>
        <Header />
        <Bio />
        <Experience />
        <Projects />
        <Skills />
        <Comic />
        <Contact />
    </div>
);

export default App;
