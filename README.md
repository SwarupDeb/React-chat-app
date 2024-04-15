# Real-Time Chat Application

This is a real-time chat application built using React, Appwrite, and React Router. Users can log in, register, and engage in conversations with random users in real time.

## Features

- User authentication with email and password.
- Real-time messaging using Appwrite's database.
- Private routes for authenticated users only.
- Responsive design for various screen sizes.

## Technologies Used

- React.js for front-end development.
- React Router for client-side routing.
- Appwrite as the backend service for authentication and database management.
- CSS for styling.

## File Structure

src
- components
  - Header.jsx
- pages
  - LoginPage.jsx
  - RegisterPage.jsx
  - Room.jsx
- utils
  - AuthContext.jsx
  - PrivateRoutes.jsx
- appwriteConfig.js
- index.css
- App.jsx
- main.jsx


## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Create a `.env` file and add your Appwrite project ID, database ID, and collection ID.
5. Start the development server using `npm start`.

## How to Use

1. Register a new account or log in with an existing account.
2. Navigate to the chat room to start messaging.
3. Type your message in the input field and press "Send" to send messages in real time.
4. You can also delete your own messages if needed.

## Screenshots

- Register:
<img width="959" alt="Screenshot 2024-04-15 233344" src="https://github.com/SwarupDeb/React-chat-app/assets/55588687/e4643b5c-71f8-4570-a674-814e9ab78ccc">

- Login:
<img width="1279" alt="Login" src="https://github.com/SwarupDeb/React-chat-app/assets/55588687/29282f21-69bf-46b3-b5da-5627f648f684">

- User 1:
<img width="959" alt="User1" src="https://github.com/SwarupDeb/React-chat-app/assets/55588687/0cdf5ede-e062-482e-833f-e76e9e74bcb0">

- User 2:
<img width="959" alt="User2" src="https://github.com/SwarupDeb/React-chat-app/assets/55588687/8a7e7859-57c0-4ea5-a622-ed2675b56b1a">


## Credits

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Appwrite](https://appwrite.io/)
