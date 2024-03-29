import React from 'react'
import '../styles/partenariats.css'

export default function Partenariats() {
    return (
        <div className="bg-partenariats">
            <div className='container-fluid div-partenariats'>
                <div className="row">
                    <h1> Nos Partenariats </h1>
                    <div className="col-md-3 col-sm-6 div-img-partenariats ">
                        <img src={process.env.PUBLIC_URL + "/img/by_construction.png"} alt="" style={{ width: '45%' }} />
                    </div>
                    <div className="col-md-3 col-sm-6 div-img-partenariats">
                        <img src={process.env.PUBLIC_URL + "/img/eiffage_construction.png"} alt="" style={{ width: '50%' }}  />
                    </div>
                    <div className="col-md-3 col-sm-6 div-img-partenariats">
                        <img src={process.env.PUBLIC_URL + "/img/picard-bg-transparent.png"} alt="" style={{ width: '50%' }}  />
                    </div>
                    <div className="col-md-3 col-sm-6 div-img-partenariats">
                        <img src={process.env.PUBLIC_URL + "/img/gtm-batiment-bg.png"} alt="" style={{ width: '50%' }}  />
                    </div>
                </div>
            </div>
        </div>
    )
}
