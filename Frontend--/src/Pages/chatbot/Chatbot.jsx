import React, { useState } from "react";
import axios from "axios";
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]); // Stores messages from user and bot
  const [input, setInput] = useState(""); // Stores current user input
  const [isChatOpen, setIsChatOpen] = useState(false); // State for toggling chatbot visibility

  // Handles sending the message
  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: input },
    ]);

    try {
      // Send message to Flask backend
      const response = await axios.post("http://127.0.0.1:5004/ask", {
        question: input,
      });

      // Add bot response to chat
      const botReply = response.data.response;
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: botReply },
      ]);
    } catch (error) {
      // Handle error response
      console.error("Error fetching AI response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "bot",
          text: "Sorry, I couldn't process that. Please try again later.",
        },
      ]);
    }

    setInput(""); // Clear input field
  };

  return (
    <div>
      {/* Chatbot toggle button */}
      <button
        className="chatbot-toggle"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        {isChatOpen ? "" : "Chat with RONNIE"}
      </button>

      {/* Chatbot container */}
      <div className={`chatbot-container ${isChatOpen ? "open" : "closed"}`}>
        <div className="chatbox">
          <div className="chat-header">
            <h3>RONNIE</h3>
            <button
              className="close-chat-btn"
              onClick={() => setIsChatOpen(false)}
            >
              &#10005;
            </button>
          </div>
          <div id="chat-output" className="chat-output" style={{ height: "200px" }}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message ${
                  message.sender === "user" ? "user-message" : "bot-message"
                }`}
              >
                {message.sender === "user" ? "You" : "RONNIE"}: {message.text}
              </div>
            ))}
          </div>
          <div className="chat-input-section">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something about fitness..."
              onKeyPress={(e) => (e.key === "Enter" ? sendMessage() : null)}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
