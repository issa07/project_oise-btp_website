import React, { useState } from 'react'
 import '../styles/navbar.css';

export default function Header() {

    // function handleClick(event) {
    //     alert("Vous avec clique sur : " + event.target.innerText);
    // }

    return (
        <div className='navbars'>
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img className='logo' src={process.env.PUBLIC_URL + '/img/oisebtp-logo.png'} alt="logo" />
                    </div>
                    <div className="col-10 div-nav ">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button> */}


                                {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Menu</button> */}

                                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvasRightLabel">Menu</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
                                            <ul className="navbar-nav">
                                                <li className="nav-item">
                                                    <a className="nav-link" aria-current="page" href="contact">Contact <p className='text-smal'>Tel : 00 00 00 00 00 <br /> Gmail : sarloisebtp@gmail.com</p></a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="our_services">Nos Services</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="galleries">Galleries</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="about" >A propos de nous</a>
                                                </li>
                                            </ul>
                                        {/* </div> */}
                                    </div>
                                </div>
                                
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
