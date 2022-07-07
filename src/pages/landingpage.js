
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { render } from "react-dom";
import { useHistory } from "react-router-dom";
function Landing() {
    let history = useHistory();
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        }}>
            <body>
                <button onClick={() => { history.push('/login') }}>Login</button>
                <br></br>
                <button onClick={() => { history.push('/registration') }}>Register</button>
                <br></br>
                <button onClick={() => { history.push('/admin') }}>Admin</button>
            </body>
        </div>

    );
}
export default Landing