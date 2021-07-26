import { useParams, Link, useHistory } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react';
import AuthContext from '../AuthContext';
import Errors from './Errors';


function EditAgent() {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [heightInInches, setHeightInInches] = useState('');
    const [errors, setErrors] = useState([]);
    
    const auth = useContext(AuthContext);
    
    const { id } = useParams();
    const history = useHistory(); 

   

    const firstNameOnChangeHandler = (event) => {
        setFirstName(event.target.value);
    }

    const middleNameOnChangeHandler = (event) => {
        setMiddleName(event.target.value);
    }

    const lastNameOnChangeHandler = (event) => {
        setLastName(event.target.value);
    }

    const dobOnChangeHandler = (event) => {
        setDob(event.target.value);
    }

    const heightInInchesOnChangeHandler = (event) => {
        setHeightInInches(event.target.value);
    }

    useEffect(() => {
        // GET http://localhost:8080/api/agent/1 HTTP/1.1

        const init = {
            headers: {
                'Authorization': `Bearer ${auth.user.token}`
            }
        }

        fetch(`http://localhost:8080/api/agent/${id}`, init)
            // Response object
            .then(response => {
                if (response.status === 404) {
                    return Promise.reject(`Received 404 Not Found for ToDo ID: ${id}`);
                }
                return response.json();
            })
            .then(data => {
                setFirstName(data.firstName);
                setMiddleName(data.middleName);
                setLastName(data.lastName);
                setDob(data.dob);
                setHeightInInches(data.heightInInches);
            })
            
            .catch(error => {
                console.log(error);
            });
    }, [id, auth.user.token]); // empty array... run once when the component is loading

    const editAgentFormSubmitHandler = (event) => {
        event.preventDefault();

        const updatedAgent = {
            agentId: id,
            firstName,
            middleName,
            lastName,
            dob,
            heightInInches,
            aliases: [],
            agencies: []
        };

        const init = {
            method: 'PUT', // GET by default
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.user.token}`
            },
            body: JSON.stringify(updatedAgent)
        };

        fetch(`http://localhost:8080/api/agent/${updatedAgent.agentId}`, init)
            .then(response => {
                if (response.status === 204) {
                    return null;
                } else if (response.status === 400) {
                    return response.json();
                }
                return Promise.reject('Something unexpected went wrong :)');
            })
            .then(data => {
                if (!data) {
                    
                    history.push('/agents');
                } else {
                    
                    setErrors(data);
                }
            })
            .catch(error => console.log(error));
    };

    return (
        <main>

            <h2>Edit Agent</h2>
            <Errors errors={errors} />
            <form onSubmit={editAgentFormSubmitHandler}>

                <div className="field">
                    <label htmlFor="firstName">First Name:</label>
                    <input id="firstName" name="firstName" type="text" value={firstName} onChange={firstNameOnChangeHandler}></input>
                </div>

                <div className="field">
                    <label htmlFor="middleName">Middle Name:</label>
                    <input id="middleName" name="middleName" type="text" value={middleName} onChange={middleNameOnChangeHandler}></input>
                </div>

                <div className="field">
                    <label htmlFor="lastName">Last Name:</label>
                    <input id="lastName" name="lastName" type="text" value={lastName} onChange={lastNameOnChangeHandler}></input>
                </div>

                <div className="field">
                    <label htmlFor="dob">DOB:</label>
                    <input id="dob" name="dob" type="date" value={dob} onChange={dobOnChangeHandler}></input>
                </div>

                <div className="field">
                    <label htmlFor="heightInInches">Height in Inches:</label>
                    <input id="heightInInches" name="heightInInches" type="number" min="0" max="200" value={heightInInches} onChange={heightInInchesOnChangeHandler}></input>
                </div>

                <button type="submit">Update Agent</button>

            </form>

            <Link to="/agents" className="btn btn-warning ml-2">
                <i className="bi bi-x"></i> Cancel
            </Link>

        </main>

    );
}

export default EditAgent;