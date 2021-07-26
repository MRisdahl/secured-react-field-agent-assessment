# Module 10 Assessment Requirements Checklist and Test Plan

## Requirements Checklist

* [X] Features (each feature complete, works without errors)
  * [X] Home
  * [X] Login
  * [X] Register
  * [X] Agents
  * [X] Add Agent
  * [X] Edit Agent
  * [X] Delete Agent
  * [X] Not Found (displays for all unknown routes)
* [ X Security
  * [X] Login State (the current logged in user's username displays somewhere on the page along with a "Logout" button)
  * [X] Logout (app provides a way for the current user to logout)
  * [X] Protected Routes (Agents, Add Agent, Edit Agent, and Delete Agent [if implemented] require a logged in user)
* [X] Validation Errors (API validation errors display in the React UI)
* [X] React Router
  * [X] Client-Side Routes (all required routes implemented)
  * [X] `useHistory` Hook (used to programmatically redirect users)
  * [X] `useParams` Hook (used to access parameters, paths, and other data)
* [X] React Context (used to share global state and helper functions to components throughout the app)
* [X] Secured Field Agent Service (provided back-end service used for all user/agent operations)
* [X] Fetch API (used for all async HTTP requests to the back-end data service)
* [X] JavaScript (valid, well-organized, clean and consistent formatting)
* [X] JSX (valid, well-organized, clean and consistent formatting)
* [X] HTML/CSS (migrated from the previous assessment or used a CSS framework)

## Test Plan

* [X] Home
  * [X] Displays when browsing to `/`
  * [X] Available to all users (anonymous and authenticated)
* [X] Login
  * [X] Displays when browsing to `/login`
  * [X] Includes "Username" and "Password" fields
  * [X] Login fails for bad username/password combination
  * [X] Generic "login failed" message displayed in the UI on failed login attempt
  * [X] Login succeeds for good username/password combination
  * [X] User is redirected to the "Home" page after a successful login
* [X] Register
  * [X] Displays when browsing to `/register`
  * [X] Includes "Username", "Password", and "Confirmation Password" fields
  * [X] API validation errors are displayed in the UI when submitting bad data
  * [X] User account is created when submitting good data
  * [X] User is automatically logged in and redirect to the "Home" page or is redirect to the "Login" page after successfully registering
* [X] Security
  * [X] Username and "Logout" button is displayed on every page after a successful login
  * [X] Clicking the "Logout" button logs out the current user
  * [X] User is redirected to the "Login" page when attempting to browse to any of the agent related routes without being logged in
* [X] Agents
  * [X] Displays when browsing to `/agents`
  * [X] Displays a list of the agents with basic information from the backend service
  * [X] Includes a button/link to browse to the "Add Agent" page
  * [X] For each agent, includes buttons/links to browse to the "Edit Agent" and "Delete Agent" pages for the associated agent
* [X] Add Agent
  * [X] Displays when browsing to `/agents/add`
  * [X] Displays a form for the user to enter an agent's information
  * [X] Includes a button to submit the form
  * [X] Includes a button/link to cancel the add operation and return to the "Agents" page
  * [X] API validation errors are displayed in the UI when submitting bad data
  * [X] An agent's information can be entered into the form and when the form is submitted, the agent is added to the backend service
  * [X] The user is redirect to the "Agents" page after successfully creating an agent
* [X] Edit Agent
  * [X] Displays when browsing to `/agents/edit/1` (replace `1` with a valid agent ID)
  * [X] Displays a form for the user to edit an agent's information
  * [X] Includes a button to submit the form
  * [X] Includes a link to cancel the edit operation and return to the "Agents" page
  * [X] The form pre-populates with the agent's current information
  * [X] API validation errors are displayed in the UI when submitting bad data
  * [X] The agent's information can be changed in the form and when the form is submitted, the agent is updated in the backend service
  * [X] The user is redirect to the "Agents" page after successfully updating an agent
* [X] Delete Agent
  * [X] Displays when browsing to `/agents/delete/1` (replace `1` with a valid agent ID)
  * [X] Displays an agent's basic information
  * [X] Displays a delete confirmation message
  * [X] Includes a button to complete the delete operation
  * [X] Includes a link to cancel the delete operation and return to the "Agents" page
  * [X] Proceeding with the delete operation removes the agent from the backend service
  * [X] The user is redirect to the "Agents" page after successfully deleting an agent
* [X] Not Found
  * [X] Attempting to browse to an unknown route displays the "Not Found" page