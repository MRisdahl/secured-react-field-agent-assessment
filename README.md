# Secured React Field Agent Assessment

## Tasks

_TODO_ Add time estimates to each of the top-level tasks

### Part 0: Set Up and Planning

* [ ] Create a new GitHub repo for this assessment or continue working in the repo from last week's React Field Agent repository (#.# hours)
  * [ ] **When creating your repo, be sure to add a `.gitignore` file using the GitHub Node template**
  * [ ] Update the README with the contents from this file
  * [ ] If not done, add the instruction team as collaborators (smashdevcode, WillSuggs, scertain)
  * [ ] Create a new branch for all work on the assessment

* [ ] Clone the [`secured-field-agent`](https://github.com/dev10-program/secured-field-agent) repo (#.# hours)
  * Review the repo's README file
  * Test starting the app by running the command `docker-compose up` from the root of the repo
  * **Note: Be sure that there aren't any other apps running in IntelliJ or from the terminal on ports 5000 and 8080.**
  * **Don't make any changes to the app**
  * **Don't copy the app into the assessment repo**
  * **Use the Secured Field Agent app instead of the original Field Agent API app for the Secured React Field Agent backend service**
  * Use the provided HTTP requests to test the provided User and Field Agent endpoints

* [ ] Review the requirements (#.# hours)

* [ ] Identify any research that I need to do (#.# hours)

### Part 1: Client-Side Routes (Friday Morning)

* [ ] Implement the required client-side routes (#.# hours)
  * [ ] Install `react-router-dom`
  * [ ] Define the necessary client-side routes (see list of routes below)
  * [ ] Stub out any components that are needed to support the client-side routes
  * [ ] Display a "Not Found" message if a route doesn't match one of the defined routes

* [ ] Migrate HTML and CSS from Module 8 assessment (#.# hours)
  * [ ] Home
  * [ ] User Login
  * [ ] User Registration

* [ ] Split apart the Agents CRUD UI component into multiple components (#.# hours)
  * [ ] A component to display all agents
  * [ ] A component to add an agent
  * [ ] A component to update an agent
  * [ ] And optionally, a component to delete an agent (it's okay to handle delete from the list component)

**Make sure that my GitHub repo is updated (i.e. push all commits to my local feature branch to the remote repo)!**

### Part 2: User Login and Registration (Friday Afternoon)






* Implement user login and registration.
* Require a user to login to view the Agents CRUD UI.
* Display the logged in user's username in the header.
* Provide a way for the user to logout.




### User Login/Registration

**Secure the React application using the instructor provided API for user registration and authentication:**

- Explore the endpoints provided
- Use to register your user
- Use to authenticate (i.e. login) a user

> See the provided API project's `README.md` file for instructions on how to run the API locally along with examples of HTTP requests and responses.

**Display the logged in user's username in the header.** This will make it clear when a user is currently logged in. Provide a way for the user to logout.

**Require a user to login to view the Agents CRUD UI.** If the user attempts to browse to any of the routes for the Agents CRUD UI, redirect them to the "Login" route.





**Make sure that my GitHub repo is updated (i.e. push all commits to my local feature branch to the remote repo)!**

### Part 3: Fetch API (Weekend)




* Use the Fetch API to send all CRUD operations to the back-end data service.

* Display all API validation errors in the React UI.




* [ ] Use the provided test plan to manually test the application

* [ ] Create a pull request in GitHub to facilitate code review

**Make sure that my GitHub repo is updated (i.e. push all commits to my local feature branch to the remote repo)!**















---

## High-Level Requirements

Complete a secured React front-end for the Field Agent project.

* Use the Fetch API to send all CRUD operations to the back-end data service.
* Display all API validation errors in the React UI.
* Implement the required client-side routes.
* Display a "Not Found" message if a route doesn't match one of the defined routes.
* Create new React components as needed to support the required client-side routes.
* Implement user login and registration.
* Require a user to login to view the Agents CRUD UI.
* Display the logged in user's username in the header.
* Provide a way for the user to logout.

## Technical Requirements

* Use `fetch` for async HTTP.
* You are not allowed to change the Field Agent HTTP Service or database (unless there's a confirmed bug and your instructor approves).
* Use React Router to implement the client-side routes.
* Use React Context to share the current logged in user's information to any component that needs access to that information.
* Use the provided User API to support adding user login and registration.
* Use React Router's `useHistory` hook to programmatically redirect users.
* Use React Router's `useParams` hook to access parameters, paths, and other data.

## Client-Side Routes

* "Home" `/` - Renders a component that displays a welcome message and a link to the "Agents" route
  * Links to other parts of the website could be added in the future
* "Agents" `/agents` - Renders a component that displays a list of agents
* "Add Agent" `/agents/add` - Renders a component that displays a form to add an agent
* "Edit Agent" `/agents/edit/:id` - Renders a component that displays a form to edit the agent specified by the `:id` route parameter
* "Delete Agent" `/agents/delete/:id` (optional) - Renders a component that displays a confirmation message to delete the agent specified by the `:id` route parameter
  * _Note: If this route isn't implemented, handle agent deletion within the "Agents" route._
* "Login" `/login` - Renders a component that displays a form to login a user
* "Register" `/register` - Renders a component that displays a form to register a user
* "Not Found" - Renders a component that displays a friendly "not found" message if the requested route doesn't match one of the defined routes