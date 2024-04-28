import React from 'react'

import '../styles/slider.css'
import { colors } from '@material-ui/core';

export default function Slider() {

    function CarouselItem({ imgSrc, label, content, active = false }) {
        return (
          <div className={`carousel-item ${active ? 'active' : ''}`}>
            <img src={process.env.PUBLIC_URL + imgSrc} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>{label}</h5>
              <p>{content}</p>
            </div>
          </div>
        );
    };

    return (
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <CarouselItem 
                    imgSrc="/img/grue.jpg" 
                    label="Construisez l'avenir avec notre expertise en Gros Œuvre !" 
                    content="Du solide Gros Œuvre pour des fondations inébranlables. Découvrez notre savoir-faire." active={true} />
                <CarouselItem 
                    imgSrc="/img/Renovations-2.jpg" 
                    label={ <span style={{ color: 'white',  boxShadow: 'black 0px 5px 25px', background: 'linear-gradient(90deg, rgba(60,60,60,1) 0%, rgba(156,156,156,0.2) 95%)' }} > Transformez votre espace avec notre service de Rénovation </span> } 
                    content={ <span style={{ color: 'white',  boxShadow: 'black 0px 5px 25px', background: 'linear-gradient(90deg, rgba(60,60,60,1) 0%, rgba(156,156,156,0.2) 95%)' }} > Donnez une nouvelle vie à vos locaux avec notre expertise en Rénovation. Rendez-vous vers un design moderne.</span>}  />
                <CarouselItem 
                    imgSrc="/img/btp_grosse-oeuvre.jpg" 
                    label={<span style={{color: 'black'}}> Ravivez l'éclat de votre bâtiment avec notre service de Ravalement de Façade! </span>} 
                    content={<span style={{color: 'black'}}> Des ravalements de Façade pour des fondations inébranlables. Découvrez notre savoir-faire. </span>} />
                {/* <div className="carousel-item active">
                    <img src={process.env.PUBLIC_URL + "/img/btp_construction.jpg"} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={process.env.PUBLIC_URL + "/img/btp_grosse-oeuvre.jpg"} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={process.env.PUBLIC_URL + "/img/grue.jpg"} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div> */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
