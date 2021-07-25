import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../AuthContext';

function Header() {
    
    const auth = useContext(AuthContext);
    return (
        <header>
            <h1>Field Agent</h1>
            <div>
                {auth.user && (
                    <>
                    Welcome {auth.user.username}! | <button onClick={() => auth.logout()}>Logout</button>
                    </>
                )}

                {!auth.user && (
                    <>
                    | <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
                    </>
                )}
            </div>
        </header>
    );
}

export default Header;