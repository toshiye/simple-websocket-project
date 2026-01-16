import WebSocket, { WebSocketServer } from "ws";
import { pool } from "./db.js";

const wss = new WebSocketServer({ port: 3001 });

wss.on("connection", async (ws: WebSocket) => {
    console.log("Client connected");

    const { rows } = await pool.query("SELECT content FROM messages ORDER BY  created_at ASC LIMIT 10");

    rows.forEach((row) => {
        ws.send(row.content);
    });

    ws.on("message", async (data) => {
        const message = data.toString();

        await pool.query("INSERT INTO messages (content) VALUES ($1)", [message]);

        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on("close", () => {
        console.log("Client disconnected");
    });
});

console.log("WebSocket server running on ws://localhost:3001");