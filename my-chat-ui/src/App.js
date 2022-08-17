import React from "react";
import "./App.css";
import Nav from "./divisions/nav/Nav";
import ChatBody from "./divisions/chatBody/ChatBody";

function App() {
  return (
    <div className="__main">
      <Nav />
      <ChatBody />
    </div>
  );
}

export default App;