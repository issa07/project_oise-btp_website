import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {

    // const [champValeur, setChampValeur] = useState('');

    // const handleChange = (event) => {
    //     setChampValeur(event.target.value);
    // }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // Validation des champs
        const champ1Value = form.current['from_name'].value;
        const champ2Value = form.current['email'].value;
        const champ3Value = form.current['phone'].value;
        const champ4Value = form.current['subject'].value;
        const champ5Value = form.current['message'].value;

        if(!champ1Value || !champ2Value || !champ3Value || !champ4Value || !champ5Value) {
            alert('Veuillez remplir tous les champs avant d\'envoyer le message.');
            return;
        }
    

        emailjs
        .sendForm(
            'service_zttbue9', // service id
            'template_gt99snd', // template id
            form.current, {
                publicKey: 'k5TlayRRGI7nNbMNA', // public key
            }
        )
        .then(
            () => {
                form.current.reset();
                alert('Message envoyé avec succes');
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <div className="sendEmail">
            <div className="container">
                <form ref={form} onSubmit={sendEmail} style={{ padding: '50px' }} >

                    <div className="row" >
                        <div className="col">
                            <div className="mb-3">
                                {/* <label>Nom et Prenom : </label> */}
                                <label for="exampleInputEmail1" className="form-label">Nom et Prenom</label>
                                <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" name="from_name" />
                            </div>

                            <div className="mb-3">
                                <label>Email : </label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" />
                            </div>

                            <div className="mb-3">
                                <label>Tel : </label>
                                <input type="phone" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="phone" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-3">
                                <label>Sujet : </label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="subject" />
                            </div>
                            <div className="form-floating">
                                <label>Message</label>
                                <textarea className="form-control"  placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '200px'}} name="message" />
                            </div>
                        </div>
                    </div>
                    {/* <input type="submit" value="Send" /> */}
                    <button type="submit" class="btn btn-outline-secondary" > Enovyer </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;