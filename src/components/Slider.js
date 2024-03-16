import React from 'react'

import '../styles/slider.css'

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
                <CarouselItem imgSrc="/img/grue.jpg" label="Third slide label" content="Some representative placeholder content for the third slide." active={true} />
                <CarouselItem imgSrc="/img/btp_construction.jpg" label="First slide label" content="Some representative placeholder content for the first slide."  />
                <CarouselItem imgSrc="/img/btp_grosse-oeuvre.jpg" label="Second slide label" content="Some representative placeholder content for the second slide." />
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
