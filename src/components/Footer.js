import React from 'react'

import '../styles/footer.css'

export default function Footer() {

    return (
        <footer className="footer-bg text-center text-lg-start text-white" style={{backgroundColor: '#969696'}}>
            <div className="container ">
                <div className="container p-4">
                    <div className="row my-4">
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

                            <div className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{width: '150px', height: '150px'}}>
                            <img src={process.env.PUBLIC_URL + '/img/oisebtp-logo.png'} height="130" alt=""
                                loading="lazy" />
                            </div>

                            <p className="text-center">Construction, Maçonnerie, rénovation, ravalement projeté</p>

                            <ul className="list-unstyled d-flex flex-row justify-content-center">
                            <li>
                                <a className="text-white px-2" href="#!">
                                <i className="fab fa-facebook-square"></i>
                                </a>
                            </li>
                            <li>
                                <a className="text-white px-2" href="#!">
                                <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a className="text-white ps-2" href="#!">
                                <i className="fab fa-linkedin"></i>
                                </a>
                            </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">Nos services</h5>

                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a href="#!" className="text-white"> Construction</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#!" className="text-white">Maçonnerie</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#!" className="text-white">Rénovation</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#!" className="text-white">Ravalement projeté</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">A propos de nous</h5>

                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a href="#!" className="text-white"> Qui sommes nous ? </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#!" className="text-white"> Equipe </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#!" className="text-white"> Partenariats </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#!" className="text-white"> Carrières </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">Contact</h5>

                            <ul className="list-unstyled">
                            <li>
                                <p><i className="fas fa-map-marker-alt pe-2"></i>7 Ruelle des Hucailles, 93240 STAINS</p>
                            </li>
                            <li>
                                <p><i className="fas fa-phone pe-2"></i>+ 01 234 567 89</p>
                            </li>
                            <li>
                                <p><i className="fas fa-envelope pe-2 mb-0"></i>sarloisebtp@gmail.com</p>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="text-center p-3" >
                    © 2024 Copyright
                </div>
            </div>
        </footer>
    )
}
