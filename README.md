# to-do
A simple To-Do app that allows users to manage tasks by adding, completing, and deleting them. This project demonstrates a task management interface using a combination of front-end and back-end technologies.

Table of Contents
Setup Instructions
Tools and Libraries
Challenges and Decisions
Features
Setup Instructions
Prerequisites
To run this project, you will need to have the following installed:

Node.js
npm (Node Package Manager)
Front-end Setup
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/todo-app.git
Navigate to the client folder:

bash
Copy code
cd todo-app/client
Install dependencies:

bash
Copy code
npm install
Run the development server:

bash
Copy code
npm start
The app should now be running on http://localhost:3000/.

Back-end Setup
Navigate to the server folder:

bash
Copy code
cd ../server
Install dependencies:

bash
Copy code
npm install
Run the server:

bash
Copy code
npm start
The server should now be running on http://localhost:5000/.

Tools and Libraries
Front-end
React: Used for building the user interface.
CSS: For basic styling of components and layout.
Axios: To make HTTP requests from the front-end to the back-end server.
React Hooks: To manage state and side effects within functional components.
Back-end
Node.js: A JavaScript runtime for executing server-side code.
Express.js: A Node.js framework for building the back-end API.
MongoDB: A NoSQL database used for storing task data (optional, depending on your setup).
Development Tools
Visual Studio Code: Code editor used for developing the project.
Postman: Used to test API endpoints during development.
Challenges and Decisions
1. State Management:
Managing the state of tasks (adding, completing, deleting) was initially done through React's useState hook. However, as the project grew, it became necessary to consider using more structured state management tools such as Redux or Context API for scalability.

2. Styling Choices:
Styling was kept minimal to maintain focus on functionality. CSS was used for styling with basic transitions and layout. A decision was made to use inline styling for specific elements, but future plans include converting this to CSS modules or styled-components for better maintainability.

3. Handling API Calls:
Axios was chosen over the native fetch API for better handling of HTTP requests and responses, specifically for features like interceptors and easier error handling.

4. Error Handling:
The error handling for network issues or incorrect task data input was a challenge. Error messages were implemented to be displayed in the UI in future iterations.

Features
Add tasks with a title and description.
Mark tasks as completed (or incomplete).
Delete tasks.
Task separation with a line for easy visual identification.
Front-end UI with responsive styling.
