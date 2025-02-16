import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]); // Stores messages from user and bot
  const [input, setInput] = useState(""); // Stores current user input
  const [isChatOpen, setIsChatOpen] = useState(false); // State for toggling chatbot visibility

  const chatOutputRef = useRef(null); // Reference for auto-scrolling

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

  // Auto-scroll to the latest message when messages update
  useEffect(() => {
    if (chatOutputRef.current) {
      chatOutputRef.current.scrollTop = chatOutputRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div>
      {/* Chatbot toggle button */}
      <button
        className="chatbot-toggle"
        style={{marginBottom:'-20px'}}
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

          {/* Chat output area */}
          <div ref={chatOutputRef} className="chat-output">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message ${message.sender === "user" ? "user-message" : "bot-message"
                  }`}
              >
                {message.sender === "bot" ? <strong style={{ color: "red" }}>RONNIE: </strong> : null}
                {message.text}
              </div>
            ))}
          </div>

          {/* Input Section */}
          <div className="chat-input-section">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something about fitness..."
              onKeyDown={(e) => (e.key === "Enter" ? sendMessage() : null)} // Fixed deprecated event
            />
            <button
              style={{
                borderRadius: "12px",
                backgroundColor: "red", // Green color
                color: "white",
                padding: "10px 16px",
                fontSize: "16px",
                border: "none",
                cursor: "pointer",
                transition: "0.3s",
                marginLeft: "10px", // Adds spacing from the input field
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow effect
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "red")} // Hover effect
              onMouseOut={(e) => (e.target.style.backgroundColor = "red")}
              onClick={sendMessage}
            >
               Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
