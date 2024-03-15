import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import SectionSlider from './components/SectionSlider';
import Bio from './components/SectionBio';
import Footer from './components/Footer';
import SendEmail from './components/SendEmail';


export default function App() {
    return (
        <div>
            <Header />
            <SectionSlider />
            <Bio />
            <SendEmail />
            <Footer />
        </div>
    )
}
