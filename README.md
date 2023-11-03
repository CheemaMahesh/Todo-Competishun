<h1> TODO
</h1>
<hr/>
<h1>Hosted Link <a href="https://todo-competishun-one.vercel.app/">ClickHere</a></h1>
<h2>Folder Structure</h2>

my-react-app/
  ├── node_modules/       // Node.js dependencies
  ├── public/            // Static files like index.html
  │   ├── index.html
  │   ├── favicon.ico
  │   └── manifest.json
  ├── src/               // React application source code
  │   ├── index.js       // Entry point for your app
  │   ├── App.js         // Main application component
  │   ├── Images/        // Folder for images
  │   │   ├── image1.jpg
  │   │   ├── image2.png
  │   ├── Auth/          // Authentication related components
  │   │   ├── AuthWrapper.jsx
  │   │   ├── SignUp.jsx
  │   │   ├── SignIn.jsx
  │   ├── Pages/         // Individual pages of your app
  │   │   ├── Home.js
  │   │   ├── About.js
  │   ├── Styles/        // CSS or SCSS styles
  │   │   ├── Home.module.css
  │   │   ├── SignUp.module.css
  │   │   ├── SignIn.module.css
  │   ├── App.css
  │   │__Index.css
  │   ├── firebase.js    // Firebase configuration file
  │   ├── TodoContextApi.js  // A context API for your todo functionality
  ├── package.json       // Project dependencies and scripts
  ├── package-lock.json  // Lock file for exact dependency versions
  ├── README.md          // Project documentation

  <hr/>
<h2>How to Open:</h2>
  (1).Import the Reposeitory.
    (2).Extract The Code
    (3).Go to teminal and give commands mentioned below
        (a).npm i
        (b).npm i firebase
        (c).npm start (to start the project);
    (4)open "http://localhost:3000/" (wait some time to lead);
<h1>Tech Used:</h1>
1.React
2.Firebase (for auth and Database);
3.VS Code


<h1>More info</h1>
<div>
  <h4>Login image</h4>
  ![Screenshot 2023-11-03 132404](https://github.com/CheemaMahesh/Todo-Competishun/assets/124231713/afae13e1-44ec-41b0-9258-c3ecdb872bfb)
  <img src="https://github.com/CheemaMahesh/Todo-Competishun/assets/124231713/afae13e1-44ec-41b0-9258-c3ecdb872bfb"/>
  <br/>
  <h4>SignUp image</h4>
  ![Screenshot 2023-11-03 132427](https://github.com/CheemaMahesh/Todo-Competishun/assets/124231713/e2ebe6d1-f630-4be6-aab4-352f28781b7d)
  <img src="https://github.com/CheemaMahesh/Todo-Competishun/assets/124231713/e2ebe6d1-f630-4be6-aab4-352f28781b7d"/>
  <h4>TODO Home images</h4>
  ![Screenshot 2023-11-03 132333](https://github.com/CheemaMahesh/Todo-Competishun/assets/124231713/a712fd5c-953e-4b5d-8014-edb37e9dcbdb)
  ![Screenshot 2023-11-03 132305](https://github.com/CheemaMahesh/Todo-Competishun/assets/124231713/ddd85d98-0f4f-4635-85b9-8abaeb4e0f88)
  <img src="https://github.com/CheemaMahesh/Todo-Competishun/assets/124231713/a712fd5c-953e-4b5d-8014-edb37e9dcbdb"/>
  <img src="https://github.com/CheemaMahesh/Todo-Competishun/assets/124231713/ddd85d98-0f4f-4635-85b9-8abaeb4e0f88"/>


</div>
Assignment Description: 
In this assignment, you will create a Todo List web application with user authentication features. Users should be able to sign up for an account, log in, and manage their tasks. Instead of a backend server and database, you can use local storage to simulate user accounts 
Requirements: 
1.User Authentication 
Implement user registration (signup) and login functionality. 
Users should be able to sign up with a username and password. 
Users should be able to log in with their credentials. 
Use forms for both registration and login. 
2.Authentication State 
Manage user authentication state using React state. 
Implement protected routes to ensure that only authenticated users can access certain parts of the application (e.g., the todo list). 
3.Task Management 
Users should be able to create, edit, mark as completed, and delete tasks. Tasks should be associated with the logged-in user. 
Tasks should persist in local storage, so they are not lost on page refresh. 
4.Logout 
Implement a logout button that allows users to log out of their accounts. 
5.User Interface 
Create an intuitive user interface with a clean design for both the authentication and todo list parts of the application. 
Display a list of tasks, each with options to edit, mark as completed, and delete. 
6.Error Handling 
Provide user-friendly error messages for scenarios such as incorrect login credentials, registration errors, or failed task updates. 
Security Considerations: 
7.User-Specific Data 
Ensure that each user can only see and manage their own tasks after logging in. Tasks should be associated with the user who created them.
Bonus Features (Optional): 
● Add due dates to tasks. 
● Implement task prioritisation (e.g., high, medium, low). 
● Add the ability to filter tasks by completed and active. 
● Implement sorting by due date or priority. 
Database Integration (Optional): 
● If you want to take it a step further, integrate a backend server and database (e.g., Node.js with Express and MongoDB) to store user accounts and tasks securely. ● Implement API endpoints for user registration, login, and task management. 

