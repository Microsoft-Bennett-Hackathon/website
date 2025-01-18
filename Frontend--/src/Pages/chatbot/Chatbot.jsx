import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]); // Stores messages from user and bot
  const [input, setInput] = useState(''); // Stores current user input
  const [isChatOpen, setIsChatOpen] = useState(false); // State for toggling chatbot visibility

  // Function to detect keywords and return the appropriate response
  const getBotResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();

    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
      return 'Hello! Welcome to FIT AI. How can I assist you today?';
    } else if (lowerInput.i5ncludes('fitness') || lowerInput.includes('exercise')) {
      return 'FIT AI provides personalized workout plans and advice. What are your fitness goals?';
    } else if (lowerInput.includes('diet') || lowerInput.includes('nutrition')) {
      return 'We offer tailored diet plans based on your fitness goals. Would you like to know more?';
    } else if (lowerInput.includes('trainer')) {
      return 'Our AI can act as your virtual fitness trainer, offering workouts, reminders, and progress tracking.';
    } else if (lowerInput.includes('progress')) {
      return 'You can track your fitness progress over time, including weight, stamina, and muscle strength improvements.';
    } else if (lowerInput.includes('goodbye') || lowerInput.includes('bye')) {
      return 'Goodbye! Stay fit and healthy. Come back anytime for assistance!';
    } else {
      return "I'm sorry, I didn't understand that. Please ask about workouts, diet, or fitness progress.";
    }
  };

  // Handles sending the message
  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', text: input },
    ]);

    const botReply = getBotResponse(input);
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'FIT AI', text: botReply },
      ]);
    }, 500);

    setInput('');
  };

  return (
    <div>
      {/* Chatbot toggle button */}
      <button
        className="chatbot-toggle"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        {isChatOpen ? '' : 'Chat with FIT AI'}
      </button>

      {/* Chatbot container */}
      <div className={`chatbot-container ${isChatOpen ? 'open' : 'closed'}`}>
        <div className="chatbox">
          <div className="chat-header">
            <h3>FIT AI - Fitness Help</h3>
            <button
              className="close-chat-btn"
              onClick={() => setIsChatOpen(false)}
            >
              &#10005;
            </button>
          </div>
          <div id="chat-output" className="chat-output">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message ${
                  message.sender === 'user' ? 'user-message' : 'bot-message'
                }`}
              >
                {message.sender === 'user' ? 'You' : 'FIT AI'}: {message.text}
              </div>
            ))}
          </div>
          <div className="chat-input-section">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something about fitness..."
              onKeyPress={(e) => (e.key === 'Enter' ? sendMessage() : null)}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
