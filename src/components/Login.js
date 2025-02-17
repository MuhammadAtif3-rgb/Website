import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sign_img from './Sign_img'
import { Navigate, useNavigate } from 'react-router-dom'

export const Login = () => {

    const history= useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })


    const [data, setData] = useState([]);
    console.log(inpval);


    const getdata = (e) => {
        // console.log(e.target.value);

        const { value, name } = e.target;
        // console.log(value,name);



        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }
    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem('useryoutube');
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === '') {
            alert('email field is required')
        } else if (!email.includes('@')) {
            alert('plz enter the valid email')
        } else if (password === '') {
            alert('Enter the password')
        } else if (password.length < 6) {
            alert('Passowrd must be greater than 6')
        } else {


            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                // console.log(userdata);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if(userlogin.length===0){
                    alert('Invalid details')
                }else{
                    console.log('User Login Successfully');
                    localStorage.setItem('User_Login' , JSON.stringify(userlogin))
                    history('/details');
                }


            }
        }

    }


    return (
        <>
            <div className='container mt-3' >
                <section className='d-flex justify-content-between'>
                    <div className='left_data mt-3 p-3' style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign In</h3>
                        <Form>


                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>


                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: 'rgb(67,185,127)' }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span>SignIn</span> </p>
                    </div>
                    <Sign_img />
                </section>
            </div>
        </>
    )
}
export default Login

