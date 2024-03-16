import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Slider from './components/Slider';
import Bio from './components/SectionBio';
import SectionOurServices from './components/SectionOurServices';
import Footer from './components/Footer';
import SendEmail from './components/SendEmail';


export default function App() {
    return (
        <div>
            <Header />
            <Slider />
            <Bio />
            <SectionOurServices />
            <SendEmail />
            <Footer />
        </div>
    )
}
