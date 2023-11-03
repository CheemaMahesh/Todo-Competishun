<h1> TODO
</h1>
<hr/>
<h1>Hosted Link <a href="https://todo-competishun-one.vercel.app/">ClickHere</a></h1>
<h2>Folder Structure</h2> <br/>

my-react-app/  <br/>
  ├── node_modules/       // Node.js dependencies<br/>
  ├── public/            // Static files like index.html<br/>
  │   ├── index.html<br/>
  │   ├── favicon.ico<br/>
  │   └── manifest.json<br/>
  ├── src/               // React application source code<br/>
  │   ├── index.js       // Entry point for your app<br/>
  │   ├── App.js         // Main application component<br/>
  │   ├── Images/        // Folder for images<br/>
  │   │   ├── image1.jpg<br/>
  │   │   ├── image2.png<br/>
  │   ├── Auth/          // Authentication related components<br/>
  │   │   ├── AuthWrapper.jsx    <br/>
  │   │   ├── SignUp.jsx <br/>
  │   │   ├── SignIn.jsx <br/>
  │   ├── Pages/         // Individual pages of your app <br/>
  │   │   ├── Home.js <br/>
  │   │   ├── About.js <br/>
  │   ├── Styles/        // CSS  styles <br/>
  │   │   ├── Home.module.css <br/>
  │   │   ├── SignUp.module.css <br/>
  │   │   ├── SignIn.module.css <br/>
  │   ├── App.css                <br/>
  │   │__Index.css                    <br/>
  │   ├── firebase.js    // Firebase configuration file <br/>
  │   ├── TodoContextApi.js  // A context API for your todo functionality  <br/>
  ├── package.json       // Project dependencies and scripts       <br/>
  ├── package-lock.json  // Lock file for exact dependency versions <br/>
  ├── README.md          // Project documentation <br/>

  <hr/>
<h2>How to SetUp:</h2>
  (1).Import the Reposeitory. <br/>
    (2).Extract The Code <br/>
    (****)Go to firebase.com and create account then open authentication(email & password format) and firestore-database if you need to store data in your database(***) <br/>
    (****)And change the firebaseConfig keys in firebase.js(****) <br/>
    (3).Go to teminal and give commands mentioned below <br/>
        (a).npm i <br/>
        (b).npm i firebase <br/>
        (c).npm start (to start the project); <br/>
    (4)open "http://localhost:3000/" (wait some time to lead); <br/>
<h1>Tech Used:</h1> <br/>
1.React Js  <br/>
2.Firebase (for auth and Database); <br/>
3.VS Code         <br/>


<h1>More info</h1>
<div>
  <h4>Login image</h4>
  <img src="https://github.com/CheemaMahesh/Todo-Competishun/assets/124231713/afae13e1-44ec-41b0-9258-c3ecdb872bfb"/>
  <br/>
  <h4>SignUp image</h4>
  <img src="https://github.com/CheemaMahesh/Todo-Competishun/assets/124231713/e2ebe6d1-f630-4be6-aab4-352f28781b7d"/>
  <h4>TODO Home images</h4>
  <img src="https://github.com/CheemaMahesh/Todo-Competishun/assets/124231713/a712fd5c-953e-4b5d-8014-edb37e9dcbdb"/>
  <img src="https://github.com/CheemaMahesh/Todo-Competishun/assets/124231713/ddd85d98-0f4f-4635-85b9-8abaeb4e0f88"/>


</div>
<h1>Assignment Description: </h1>
In this assignment, you will create a Todo List web application with user authentication features. Users should be able to sign up for an account, log in, and manage their tasks. Instead of a backend server and database, you can use local storage to simulate user accounts 
Requirements: <br/>
1.User Authentication 
Implement user registration (signup) and login functionality. 
Users should be able to sign up with a username and password. 
Users should be able to log in with their credentials. 
Use forms for both registration and login.
<br/> 
2.Authentication State 
Manage user authentication state using React state. 
Implement protected routes to ensure that only authenticated users can access certain parts of the application (e.g., the todo list). <br/>
3.Task Management 
Users should be able to create, edit, mark as completed, and delete tasks. Tasks should be associated with the logged-in user. 
Tasks should persist in local storage, so they are not lost on page refresh. <br/>
4.Logout 
Implement a logout button that allows users to log out of their accounts. <br/>
5.User Interface 
Create an intuitive user interface with a clean design for both the authentication and todo list parts of the application. 
Display a list of tasks, each with options to edit, mark as completed, and delete. <br/>
6.Error Handling 
Provide user-friendly error messages for scenarios such as incorrect login credentials, registration errors, or failed task updates. 
Security Considerations: <br/>
7.User-Specific Data 
Ensure that each user can only see and manage their own tasks after logging in. Tasks should be associated with the user who created them.
Bonus Features (Optional): <br/>
● Add due dates to tasks. <br/>
● Implement task prioritisation (e.g., high, medium, low).  <br/>
● Add the ability to filter tasks by completed and active.  <br/>
● Implement sorting by due date or priority.  <br/>
Database Integration (Optional):  <br/>
● If you want to take it a step further, integrate a backend server and database (e.g., Node.js with Express and MongoDB) to store user accounts and tasks securely. ● Implement API endpoints for user registration, login, and task management. 

