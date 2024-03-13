import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import SendEmail from './components/SendEmail';


export default function App() {
    return (
        <div>
            <Header />
            <Section />
            <Footer />
            <SendEmail />
        </div>
    )
}
