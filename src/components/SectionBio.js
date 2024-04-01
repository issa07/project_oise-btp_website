import React from 'react'

import '../styles/sectionBio.css'

export default function () {

    return (
        <div className='div-global-bio' id='about'>
            <div className="container ">
                <div className="row " id='rowBio'>
                    <div className="col col-md-4">
                        {/* <h1>Bio...</h1> */}
                        <p className='text-bio'>
                            <strong>OISE BTP</strong>, fondée en 2020, est votre partenaire de confiance pour tous vos besoins en <strong>construction</strong>,
                            <strong> rénovation</strong>, <strong> ravalement projeté</strong> et <strong> maçonnerie</strong>. 
                            Notre équipe expérimentée travaille avec passion pour réaliser vos projets selon vos besoins spécifiques. 
                            Contactez-nous dès aujourd'hui pour des résultats exceptionnels et une expérience client de premier ordre.
                        </p>
                    </div>
                    <div className="col-10 col-md-8 div-img">
                        <img src={process.env.PUBLIC_URL + "/img/bio_img.jpg"} class="img-fluid img-bio" alt="batiment con"/>
                        {/* <h1>Image...</h1> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
