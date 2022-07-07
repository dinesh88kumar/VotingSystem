import axios from "axios";
import { useState } from "react";
import "../components/registration.css";
import { useHistory, Route } from "react-router-dom";
window.rid = "";
window.rpassword = "";
window.remail = "";
window.rphone = "";
window.rname = "";
function Login() {

    let history = useHistory();
    const [id, setid] = useState("");
    const [password, setPassword] = useState("");




    async function handleSubmit(event) {
        event.preventDefault();
        try {
            console.log(id + "&&&&&&&&&&&&&&${id}")
            await axios.get("http://localhost:8030/voter/" + id
            ).then((response) => (window.rid = response.data.id, window.rpassword = response.data.password, window.remail = response.data.email, window.rname = response.data.name, window.rphone = response.data.phone));
            console.log("Email id :" + window.remail)
            if (window.rid == id && window.rpassword == password) {
                history.push('/home')
                console.log("User Login Successfully");
            } else {
                alert("User Login FAILED");
            }






        }
        catch (err) {
            alert("User Registation Failed" + err);
        }
    }
    return (
        <div className="register-container">

            <form className="register-form" onSubmit={handleSubmit}>
                <br></br>
                <h1>Login</h1>
                <p>Fill in the Information Below</p>






                <input type="text"
                    name="id"
                    placeholder="id"
                    onChange={(event) => {
                        setid(event.target.value);
                    }}
                />
                <input type="text"
                    name="password"
                    placeholder="password"
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                />





                <button type="submit">Login</button>


                <button onClick={() => { history.push('/registration') }}>Register</button>
            </form>


        </div>
    )
}

export default Login;