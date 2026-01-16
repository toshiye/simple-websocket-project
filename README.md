# Simple WebSocket Project

A real-time chat application demonstrating WebSocket communication between a frontend client and a backend server, with message persistence in PostgreSQL.

## Tech Stack

- **Backend**: Node.js, TypeScript, WebSocket (ws library), PostgreSQL
- **Frontend**: React (TypeScript), WebSocket client
- **Build Tools**: TypeScript compiler, npm

## Prerequisites

- Node.js (v16 or later)
- PostgreSQL (running locally or remotely)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/simple-websocket-project.git
   cd simple-websocket-project

2. Install dependencies for backend:
    cd backend
    npm install

3. Install dependencies for frontend:
    cd ../frontend
    npm install

Setup
 1. Create a PostgreSQL database named simple_websocket_project.
 2. Create a messages table:
    CREATE TABLE messages (
        id SERIAL PRIMARY KEY,
        content TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
 3. In backend/.env, ensure the following variables are set (adjust as needed):
    DB_USER=postgres
    DB_HOST=localhost
    DB_NAME=simple_websocket_project
    DB_PASSWORD=your_password
    DB_PORT=5432

Running Locally
Start the backend server:
    cd backend
    npm run dev

The server runs on ws://localhost:3001.

Start the frontend client:
    cd frontend
    npm run dev

The app opens in your browser (typically http://localhost:3000).

Open multiple browser tabs to test real-time messaging.

Usage
Connect to the WebSocket server.
Send messages from the frontend; they are broadcast to all connected clients and stored in the database.
On connection, the last 10 messages are loaded from the database.
Contributing
Feel free to submit issues or pull requests.

License
MIT ``````

