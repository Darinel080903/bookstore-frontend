import React from 'react'
import styles from "../css/Register.module.css"
import { UserContext } from '../context/UserContext'
import { useState, useRef, useContext } from "react"
import { Outlet, Link, Navigate } from 'react-router-dom'




function Register() {

    const { user, setUser } = useContext(UserContext);

    const form = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(form.current);

        fetch('http://localhost:8080/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formData.get('name'),
                lastName: formData.get('lastname'),
                userName: formData.get('username'),
                email: formData.get('email'),
                password: formData.get('password'),
                address: formData.get('address'),
                phoneNumber: formData.get('phone'),
                birth: formData.get('birthday')

            })
        })
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(err => console.error(err))

    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [adress, setAdress] = useState("");
    const [bday, setBday] = useState("");

    function handleChangeEmail(e) {
        const value = e.target.value;
        setEmail(value);
    }

    function handleChangeName(e) {
        const value = e.target.value;
        setName(value);
    }
    function handleChangeUsername(e) {
        const value = e.target.value;
        setUsername(value);
    }
    function handleChangeLastname(e) {
        const value = e.target.value;
        setLastname(value);
    }
    function handleChangePhone(e) {
        const value = e.target.value;
        setPhone(value);
    }
    function handleChangePassword(e) {
        const value = e.target.value;
        setPassword(value);
    }
    function handleChangeAdress(e) {
        const value = e.target.value;
        setAdress(value);
    }
    function handleChangeBday(e) {
        const value = e.target.value;
        setBday(value);
    }



    return (
        <div className={styles.registerContainer}>

            {
                user &&
                <Navigate to="/" replace={true} />
            }

            <div className={styles.registerForm}>
                <h2>Register</h2>
                <form method="" id="form" onSubmit={handleSubmit} ref={form}>
                    <label className={styles.label}>
                        <span>Name</span>
                        <input
                            onChange={handleChangeName}
                            type="text"
                            id='name'
                            name='name'

                        />
                    </label>
                    <label className={styles.label}>
                        <span>Last Name</span>
                        <input
                            onChange={handleChangeLastname}
                            type="text"
                            name='lastname'
                            id='lastname'

                        />
                    </label>
                    <label className={styles.label}>
                        <span>E-mail</span>
                        <input
                            onChange={handleChangeEmail}
                            type="email"
                            name='email'
                            id='email'

                        />
                    </label>
                    <label className={styles.label}>
                        <span>Username</span>
                        <input
                            onChange={handleChangeUsername}
                            type="text"
                            name='username'
                            id='username'

                        />
                    </label>
                    <label className={styles.label}>
                        <span>Password</span>
                        <input
                            onChange={handleChangePassword}
                            type="password"
                            name='password'
                            id='password'

                        />
                    </label>
                    <label className={styles.label}>
                        <span>Phone number</span>
                        <input
                            onChange={handleChangePhone}
                            type="text"
                            name='phone'
                            id='phone'
                        />
                    </label>
                    <label className={styles.label}>
                        <span>Adress</span>
                        <input
                            onChange={handleChangeAdress}
                            type="text"
                            name='address'
                            id='address'

                        />
                    </label>
                    <label className={styles.label}>
                        <span>Birth day</span>
                        <input
                            onChange={handleChangeBday}
                            type="date"
                            name='birthday'
                            id='birthday'
                        />
                    </label>
                    <label>
                        <button type='submit' className={styles.btnRegister}>Register</button>
                    </label>
                </form>
            </div>
        </div>
    );
}

export default Register;