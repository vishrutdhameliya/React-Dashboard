import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')

    let Nav = useNavigate();

    function btnLogin() {

        let data1 = JSON.parse(localStorage.getItem('arr'))

        let rdata = JSON.parse(localStorage.getItem('arr'))
        // console.log(rdata);
        let data = rdata.find((x) => x.email == email && x.psw == pass)
        if (data) {
            localStorage.setItem('isLogin', true);
            props.setisLogin(true);
            Nav("/");
        }
        else {
            alert('noo!!!!!!!!!')
        }
        localStorage.setItem('isLogin', true);

    }

    const btnemail = (e) => {
        setemail(e.target.value)
    }
    const btnpass = (e) => {
        setpass(e.target.value)
    }
    const redirect = () => {
        Nav('/signup');
    }


    return (
        <>
            <div className='w-25'>
                <form>
                    <label>Username : </label>
                    <input type="email" placeholder="Enter Username" name="username" required className='txt' onChange={btnemail} />
                    <label>Password : </label>
                    <input type="password" placeholder="Enter Password" name="password" required className='txt' onChange={btnpass} />
                    <button type="submit" className='btn btn-primary' onClick={btnLogin}>Login</button>
                    <input type="checkbox" checked="checked" /> Remember me
                    <button onClick={redirect}>creat a new account</button>
                </form>
            </div>
        </>
    )
}

export default Login