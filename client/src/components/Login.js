import {useState, useContext} from 'react';
import {Link, useHistory} from 'react-router-dom'
import AuthContext from '../AuthContext';

import Errors from './Errors';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const auth = useContext(AuthContext);

    const history = useHistory();

    const usernameOnChangeHandler = (event) => {
        setUsername(event.target.value);
    }

    const passwordOnChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        auth.login(username)

        history.push('/home');
    }

    return (
        <main>
            <h2>Login</h2>
            
            <form onSubmit={formSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input className="form-control" type="text" id="username" name="username"
                        value={username} onChange={usernameOnChangeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input className="form-control" type="password" id="password" name="password"
                        value={password} onChange={passwordOnChangeHandler} />
                </div>
                <div className="mt-5">
                    <button className="btn btn-success" type="submit">
                        <i className="bi bi-plus-circle-fill"></i> Login</button>
                    <Link to="/home" className="btn btn-warning ml-2">
                        <i className="bi bi-x"></i> Cancel
                    </Link>
                </div>
            </form>
        </main>

    );
}

export default Login;