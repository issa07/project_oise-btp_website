import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Slider from './components/Slider';
import Bio from './components/SectionBio';
import SectionOurServices from './components/SectionOurServices';
import Partenariats from './components/Partenariats';
import SendEmail from './components/SendEmail';
import Footer from './components/Footer';


export default function App() {
    return (
        <div>
            <Header />
            <Slider />
            <Bio />
            <SectionOurServices />
            <Partenariats />
            <SendEmail />
            <Footer />
        </div>
    )
}
