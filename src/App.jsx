import { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import "./index.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("token") !== null
  );

  return loggedIn ? (
    <Dashboard setLoggedIn={setLoggedIn} />
  ) : (
    <Login setLoggedIn={setLoggedIn} />
  );
}

export default App;