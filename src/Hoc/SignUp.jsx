import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    let Nav = useNavigate();
    const [obj, setobj] = useState({})
    const [arr, setarr] = useState(JSON.parse(localStorage.getItem('arr')) || []);

    const FromData = (e) => {

        obj[e.target.name] = e.target.value
        setobj({...obj})
      
    }
    
    const save = () => {

        let data = arr.find((x) => x.email === obj.email)
        console.log(data);
        if (data) {
            alert("Email already registered. Please use a different email.");
        }
        else {
            arr.push(obj);
            setarr([...arr])
            setobj({})
            console.log(arr);
            localStorage.setItem('arr', JSON.stringify(arr));
        }
        Nav('/login');
    }


    return (
        <>
            <form action="">

            <label for="psw-repeat"><b>Name</b></label>
                <input type="text" placeholder="Enter Name" name="name" id="name" required class='res' onChange={FromData} />
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required class='res' onChange={FromData} />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required class='res' onChange={FromData} />
                <hr />

                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                <button type="button" class="registerbtn" onClick={save}>Register</button>


            </form>
        </>
    )
}

export default SignUp