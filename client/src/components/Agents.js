import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../AuthContext';

function Agents() {
    const [agents, setAgents] = useState([]);

    const auth = useContext(AuthContext);

    const getAgents = (token) => {

        const init = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        fetch('http://localhost:8080/api/agent', init)
            .then(response => response.json())
            .then(data => setAgents(data))
            .catch(error => console.log(error));
    };

    useEffect(() => {
        getAgents(auth.user.token);
    }, [auth.user.token]);


    const agentDeleteClickHandler = (agentId) => {

        const init = {
          method: 'DELETE', // GET by default
          headers: {
            'Authorization': `Bearer ${auth.user.token}`
          }
        };
    
        fetch(`http://localhost:8080/api/agent/${agentId}`, init)
          .then(response => {
            if (response.status === 204) {
              getAgents(auth.user.token);
            } else if (response.status === 404) {
              Promise.reject(`ToDo ID ${agentId} not found`);
            } else {
              Promise.reject('Something unexpected went wrong :)');
            }
          })
          .catch(error => console.log(error));
      };

    return (
        <main>
            <h2>Agents</h2>
            <Link to="/todos/add" className="btn btn-primary mb-4">
                <i className="bi bi-plus-circle-fill"></i> Add Agent
            </Link>

            <div className="cards">
                {agents.map(agent => (
                    <div className="card">
                        <header>
                            <h3>{agent.firstName} {agent.middleName} {agent.lastName}</h3>
                        </header>
                        <ul>
                            <li><span>DOB:</span> {agent.dob}</li>
                            <li><span>Height in Inches:</span> {agent.heightInInches}</li>
                        </ul>
                        <footer>
                            <div>
                                <Link to={`/agents/edit/${agent.agentId}`} className="btn btn-primary btn-sm">
                                    <i className="bi bi-pencil"></i> Edit
                                </Link>
                                &nbsp;|&nbsp;
                                <button onClick={() => agentDeleteClickHandler(agent.agentId)}><i class="bi bi-trash-fill"></i> Delete</button>
                            </div>
                        </footer>
                    </div>
                ))}
            </div>
        </main>

    );
}

export default Agents;