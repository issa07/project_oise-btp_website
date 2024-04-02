import React, { useState  } from 'react'
import { Drawer, Button, List, ListItem, ListItemText } from '@material-ui/core';


import '../styles/navbar.css';


export default function Header() {

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    const checkScreenSize = () => {
        setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', checkScreenSize);
    
    return ( 
        <>
            <div className="navbar">
                <div className="container">
                    <div className="row ">
                        <div className="col-2">
                            <img className='logo' src={process.env.PUBLIC_URL + '/img/oisebtp-logo.png'} alt="logo" />
                        </div>
                        <div className="col-10 div-nav">
                            {isSmallScreen ? (
                                <Button className="navbar-toggler drawer-btn"  onClick={handleToggle}>
                                    <span className="navbar-toggler-icon"></span>
                                </Button>
                            ) : (
                                <List className='offcanvas-body drawer-list '>
                                    <ListItem button style={{alignItems: 'baseline'}}>
                                        <ListItemText>
                                            <a className="nav-link" aria-current="page" href="#contact">Contact <p className='text-smal'>Tel : 00 00 00 00 00 <br /> Gmail : sarloisebtp@gmail.com</p></a>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem button style={{alignItems: 'baseline'}}>
                                        <ListItemText>
                                            <a className="nav-link" href="#about" >A propos de nous</a>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem button style={{alignItems: 'baseline'}}>
                                        <ListItemText>
                                            <a  className="nav-link" href="#services">Nos Services</a>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem button style={{alignItems: 'baseline'}}>
                                        <ListItemText>
                                            <a className="nav-link" href="#partenariats">Nos partenariats</a>
                                        </ListItemText>
                                    </ListItem>
                                </List>
                            )}
                            <Drawer anchor="right" open={open} onClose={handleToggle} >
                                <List>
                                    <ListItem button>
                                        <ListItemText>
                                            <a className="nav-link" aria-current="page" href="#contact">Contact <p className='text-smal'>Tel : 00 00 00 00 00 <br /> Gmail : sarloisebtp@gmail.com</p></a>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText>
                                            <a className="nav-link" href="#about" >A propos de nous</a>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText>
                                            <a  className="nav-link" href="#services">Nos Services</a>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText>
                                            <a className="nav-link" href="#partenariats">Nos partenariats</a>
                                        </ListItemText>
                                    </ListItem>
                                </List>
                            </Drawer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
