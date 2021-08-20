import React from "react";
import "./App.css";
import Chat from "./components/Chat/Chat";
import Sidebar from "./components/sidebar/Sidebar";
import { useSelector } from "react-redux";
import { selectUser } from "../src/features/user/userSlice";
function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <h2>Login Abeg(Mbok)</h2>
      )}
    </div>
  );
}

export default App;
