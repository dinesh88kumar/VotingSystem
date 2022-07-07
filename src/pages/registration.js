import axios from "axios";
import { useState } from "react";
import { useHistory, Route } from "react-router-dom";
import Login from "./login";
import "../components/registration.css";
import React from "react";
function Register() {


    const [id, setId] = useState("");
    const [firstname, setFname] = useState("");
    const [password, setPassword] = useState("");
    const [Email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    let history = useHistory();




    async function handleSubmit(event) {
        event.preventDefault();
        try {
            console.log(Email + "&&&&&&&&&&&&&&")
            await axios.post("http://localhost:8030/save",
                {
                    id: id,
                    name: firstname,
                    password: password,
                    email: Email,
                    phone: phone,

                });

            alert("User Registation Successfully");

            setId("");
            setFname("");
            setPassword("");
            setEmail("");
            setPhone("");


        }
        catch (err) {
            alert("User Registation Failed" + err);
        }
    }
    return (
        <div className="register-container">

            <form className="register-form" onSubmit={handleSubmit}>
                <br></br>
                <h1>Register</h1>
                <p>Fill in the Information Below</p>

                <input type="text"
                    name="id"
                    placeholder="id"

                    onChange={(event) => {
                        setId(event.target.value);
                    }}
                />

                <input type="text"
                    name="firstname"
                    placeholder="Firstname"
                    onChange={(event) => {
                        setFname(event.target.value);
                    }}
                />

                <input type="text"
                    name="password"
                    placeholder="password"
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                />


                <input type="text"
                    name="Email"
                    placeholder="Email"
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />
                <input type="text"
                    name="phone"
                    placeholder="phone"
                    onChange={(event) => {
                        setPhone(event.target.value);
                    }}
                />



                <button type="submit">Register</button>

                <button onClick={() => { history.push('/login') }}>Login</button>
            </form>



        </div>
    )
}

export default Register;