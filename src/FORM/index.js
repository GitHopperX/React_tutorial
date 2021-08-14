import React, { useState } from 'react'
import style from './form.module.css'


export default function FORM() {

    const [user, setUser] = useState({ name: '', email: '', password: '' })
    //destructure
    const { name, email, password } = user

    const hanldeSubmit = (e) => {
        console.log("form is submitted");
        //console.log(name, email, password);
        console.log(user);
        e.preventDefault();
    }

    const handleChanged = (e) => {
        console.log(e.target.name);
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <h1>Registration</h1>
            <form name="submit" action="" onSubmit={hanldeSubmit}>
                <div className={style.formGroup}>
                    <label htmlFor="name">Name: </label>
                    <input value={name} onChange={handleChanged} type="text" name="name" id="name" required />

                </div>
                <div className={style.formGroup}>
                    <label htmlFor="email">Email: </label>
                    <input value={email} onChange={handleChanged} type="text" name="email" id="email" required />
                </div>

                <div className={style.formGroup}>
                    <label htmlFor="password">Password: </label>
                    <input value={password} onChange={handleChanged} type="password" name="password" id="password" required />
                </div>

                <div className={style.formGroup}>
                    <button className="button" type="submit">Register</button>
                </div>

            </form>
        </div>
    )
}
