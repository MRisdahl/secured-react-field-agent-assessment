import { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Errors from './Errors';
import AuthContext from '../AuthContext';

function AddAgent() {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [heightInInches, setHeightInInches] = useState('');
    const [errors, setErrors] = useState([]);

    
    const auth = useContext(AuthContext);

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
    
    const addAgentFormSubmitHandler = (event) => {
        event.preventDefault();


        const newAgent = {
            firstName,
            middleName,
            lastName,
            dob,
            heightInInches,
            aliases: [],
            agencies: []
        };


        const init = {
            method: 'POST', // GET by default
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${auth.user.token}`
            
            },
            body: JSON.stringify(newAgent)
          };
      
          fetch('http://localhost:8080/api/agent', init)
            .then(response => {
              if (response.status === 201 || response.status === 400) {
                return response.json();
              }
              return Promise.reject('Something unexpected went wrong :)');
            })
            .then(data => {
              // we either created the recorded...
              if (data.agentId) {
                history.push('/agents')
              } else {
                // we have error messages
                setErrors(data);
              }
            })
            .catch(error => console.log(error));
    }
    
    
    return (
        <main>

            <h2>Add Agent</h2>
            <Errors errors={errors} />

            <form onSubmit={addAgentFormSubmitHandler}>

                <div className="field">
                    <label htmlFor="firstName">First Name:</label>
                    <input id="firstName" name="firstName" type="text" onChange={firstNameOnChangeHandler}></input>
                </div>

                <div className="field">
                    <label htmlFor="middleName">Middle Name:</label>
                    <input id="middleName" name="middleName" type="text" onChange={middleNameOnChangeHandler}></input>
                </div>

                <div className="field">
                    <label htmlFor="lastName">Last Name:</label>
                    <input id="lastName" name="lastName" type="text" onChange={lastNameOnChangeHandler}></input>
                </div>

                <div className="field">
                    <label htmlFor="dob">DOB:</label>
                    <input id="dob" name="dob" type="date" onChange={dobOnChangeHandler}></input>
                </div>

                <div className="field">
                    <label htmlFor="heightInInches">Height in Inches:</label>
                    <input id="heightInInches" name="heightInInches" type="number" min="0" max="200" onChange={heightInInchesOnChangeHandler}></input>
                </div>

                <button><i className="fas fa-plus-circle"></i> Add Agent</button>

            </form>

            <Link to="/agents" className="btn btn-warning ml-2">
            <i className="bi bi-x"></i> Cancel
          </Link>

        </main>

    );
}

export default AddAgent;