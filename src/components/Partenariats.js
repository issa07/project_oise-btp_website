import React from 'react'
import '../styles/partenariats.css'

export default function Partenariats() {
    return (
        <div className="bg-partenariats">
            <div className='container-fluid div-partenariats'>
                <div className="row">
                    <h1> Nos Partenariats </h1>
                    <div className="col-xs-6 col-sm-3  div-img-partenariats ">
                        <img src={process.env.PUBLIC_URL + "/img/by_construction.png"} alt="" style={{ width: '50%' }} />
                    </div>
                    <div className="col-xs-6 col-sm-3  div-img-partenariats">
                        <img src={process.env.PUBLIC_URL + "/img/eiffage_construction.png"} alt="" style={{ width: '50%' }}  />
                    </div>
                    <div className="col-xs-6 col-sm-3  div-img-partenariats">
                        <img src={process.env.PUBLIC_URL + "/img/picard.png"} alt="" style={{ width: '50%' }}  />
                    </div>
                    <div className="col-xs-6 col-sm-3  div-img-partenariats">
                        <img src={process.env.PUBLIC_URL + "/img/eiffage_construction.png"} alt="" style={{ width: '50%' }}  />
                    </div>
                </div>
            </div>
        </div>
    )
}
