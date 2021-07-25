import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <div>
                <Link to="/home">Home</Link> | <a href="#">Agencies</a> | <a href="#">Locations</a> |
                <Link to="/agents">Agents</Link> | <a href="#">Missions</a>
            </div>
        </nav>
    );
}

export default NavBar;