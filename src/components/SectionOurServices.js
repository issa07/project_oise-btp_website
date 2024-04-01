import React from 'react'

import '../styles/serctionOurServices.css'

export default function SectionOurServices() {

    return (
        <div className='div-global-services' id='services'>
            <div className="container">
                <h1 className="title-ourServices"><strong>Nos services</strong></h1>
                <div className="row">
                    <div className="col-6 col-md-4 div-service">
                        <img src={process.env.PUBLIC_URL + '/img/construction-transparent.png'} alt="" className="img-fluid" />
                        <h4><b> Construction </b></h4>
                        <p>
                            Oise BTP excelle dans la construction sur mesure de maisons, 
                            bâtiments commerciaux et industriels. 
                            Avec une expertise solide et un souci du détail, 
                            nous concrétisons vos projets selon vos spécifications exactes, 
                            garantissant des structures solides et durables.
                        </p>
                    </div>
                    <div className="col-6 col-md-4 div-service">
                        <img src={process.env.PUBLIC_URL + '/img/renovation-transparent.png'} alt="" className="img-fluid" />
                        <h4><b> Rénovation  </b></h4>
                        <p> 
                            Confiez à Oise BTP la rénovation de votre maison, bureau ou espace commercial. 
                            Notre équipe qualifiée personnalise chaque projet pour créer des environnements fonctionnels, 
                            esthétiques et conformes à vos besoins.
                        </p>
                    </div>
                    <div className="col-6 col-md-4 div-service last-div-service">
                        <img src={process.env.PUBLIC_URL + '/img/ravalement-projete_transparent.png'} alt="" className="img-fluid" />
                        <h4><b> Ravalement projeté  </b></h4>
                        <p>
                            Oise BTP offre des services de ravalement projeté de haute qualité pour rafraîchir et renforcer la durabilité de vos façades. 
                            Avec des techniques avancées et des matériaux de première qualité, nous améliorons l'attrait et la valeur de votre propriété.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
