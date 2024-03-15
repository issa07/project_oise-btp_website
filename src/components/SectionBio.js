import React from 'react'

import '../styles/sectionBio.css'

export default function () {

    return (
        <div className='div-global-bio'>
            <div className="container ">
                <div className="row justify-content-start ">
                    <div className="col col-md-4">
                        <h1>Bio...</h1>
                        <p className='text-bio'>
                            Oise BTP, fondée en 2020, est votre partenaire de confiance pour tous vos besoins en construction, 
                            rénovation, ravalement projeté et maçonnerie. 
                            Notre équipe expérimentée travaille avec passion pour réaliser vos projets selon vos besoins spécifiques. 
                            Contactez-nous dès aujourd'hui pour des résultats exceptionnels et une expérience client de premier ordre.
                        </p>
                    </div>
                    <div className="col-10 col-md-8 col-bio-img">
                        <img src={process.env.PUBLIC_URL + "/img/bio_img.jpg"} class="img-fluid img-bio" alt="Responsive image"/>
                        {/* <h1>Image...</h1> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
