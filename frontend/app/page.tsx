'use client';

import { useEffect, useState } from "react";

export default function App() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3001");

    socket.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };

    socket.onopen = () => {
      console.log("Connected to WebSocket");
    };

    socket.onclose = () => {
      console.log("Disconnected");
    };

    setWs(socket);

    return () => socket.close();
  }, []);

  const sendMessage = () => {
    if (!ws || !input) return;

    ws.send(input);
    setInput("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>WebSocket Chat</h2>

      <div style={{ border: "1px solid #ccc", padding: 10, height: 200, overflowY: "auto" }}>
        {messages.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}