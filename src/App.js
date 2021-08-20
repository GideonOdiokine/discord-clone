import React from "react";
import "./App.css";
import Chat from "./components/Chat/Chat";
import Sidebar from "./components/sidebar/Sidebar";
import { useSelector } from "react-redux";
import { selectUser } from "../src/features/user/userSlice";
import Login from "./pages/Login";
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
        <Login />
      )}
    </div>
  );
}

export default App;
