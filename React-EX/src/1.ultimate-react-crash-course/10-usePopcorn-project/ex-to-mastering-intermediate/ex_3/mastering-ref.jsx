import { useEffect, useRef, useState } from "react";

export default function ChatApp() {
  const [messages, setMessages] = useState([
    "Hello! 👋",
    "How are you?",
    "Welcome to the chat!",
  ]);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]); 

  function sendMessage() {
    if (input.trim() !== "") {
      setMessages([...messages, input]);
      setInput(""); 
    }
  }

  return (
    <div style={{ width: "300px", margin: "20px auto", textAlign: "center" }}>
      <div
        ref={chatRef}
        style={{
          height: "300px",
          overflowY: "auto",
          border: "1px solid gray",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {messages.map((msg, index) => (
          <p key={index} style={{ background: "#f1f1f1", padding: "5px", borderRadius: "5px", marginBottom: "5px" }}>
            {msg}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        placeholder="Type a message..."
        style={{ width: "80%", padding: "5px", marginTop: "10px" }}
      />
      <button onClick={sendMessage} style={{ padding: "5px 10px", marginLeft: "5px" }}>Send</button>
    </div>
  );
}
