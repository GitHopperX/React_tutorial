import React, {useState} from 'react'
import style  from './form.module.css'


export default function FORM() {
   
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChanged = (e) =>{
        console.log(e.target.value);
        setName(e.target.value);
    }

    const handleEmailChanged = (e) =>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordChanged = (e) =>{
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    const hanldeSubmit = (e) =>{
        // let userInfo = {
        //     name : name,
        //     email : email,
        //     password : password

        // } OR

        let userInfo = {
            name,
            email,
            password

        }

        console.log("form is submitted");
        //console.log(name, email, password);
        console.log(userInfo);
    
        e.preventDefault();
    }


    return (
        <div>
            <h1>Registration</h1>
            <form action="" onSubmit = {hanldeSubmit}>
                <div className = {style.formGroup}>
                    <label htmlFor="name">Name: </label>
                    <input value = {name} onChange = {handleNameChanged} type="text" name="name" id="name" required />

                </div>
                <div className = {style.formGroup}>
                    <label htmlFor="email">Email: </label>
                    <input value = {email} onChange = {handleEmailChanged} type="text" name="email" id="email" required />
                </div>

                <div className = {style.formGroup}>
                    <label htmlFor="password">Password: </label>
                    <input value = {password} onChange = {handlePasswordChanged} type="password" name="password" id="password" required />
                </div>

                <div className = {style.formGroup}>
                    <button className = "button" type = "submit">Register</button>
                </div>

            </form>
        </div>
    )
}
