import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/esm/Button';

const Details = () => {

    const [logindata, setLoginData] = useState([]);
    console.log(logindata);

    const [show, setShow] = useState(false);


    var todayDate = new Date().toISOString().slice(0, 10);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // console.log(todayDate);
    const Birthday = () => {
        const getuser = localStorage.getItem('user_login');


        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
            // console.log(user);
            setLoginData(user)


            const userbirth = logindata.map((el, k) => {
                return el.date === todayDate
            })

            if (userbirth) {
                setTimeout(() => {
                    console.log('ok');
                    handleShow();

                }, 3000)
            }

        }
    }
    useEffect(() => {
        Birthday();

    }, [])


    return (
        <>
            {
                logindata.length === 0 ? 'Welcome to digimark' :
                    <>
                        <h1>Detail Page</h1>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </>
            }

        </>
    )
}

export default Details