import React from 'react'

import '../styles/serctionOurServices.css'

export default function SectionOurServices() {
  return (
    <div className='div-global-services'>
        <div className="container">
            <h1 className="title-ourServices"><strong>Nos services</strong></h1>
            <div className="row">
                <div className="col">
                    <img src={process.env.PUBLIC_URL + '/img/ravalement-projete.jpg'} alt="" className="img-services" />
                    <p>Construction</p>
                </div>
                <div className="col">
                    <img src={process.env.PUBLIC_URL + '/img/construction-img.jpg'} alt="" className="img-services" />
                    <p>Rénovation</p>
                </div>
                <div className="col">
                    <img src={process.env.PUBLIC_URL + '/img/construction-img.jpg'} alt="" className="img-services" />
                    <p>Ravalement projeté</p>
                </div>
            </div>
        </div>
    </div>
  )
}
