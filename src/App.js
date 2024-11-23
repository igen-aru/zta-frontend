import React, { useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/token", {
        username,
        password,
      });
      setToken(response.data.access_token);
      alert("Login successful!");
    } catch (error) {
      alert("Login failed!");
    }
  };

  return (
    <div>
      <h1>Zero Trust Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {token && <p>Access Token: {token}</p>}
    </div>
  );
}
const apiUrl = process.env.REACT_APP_API_URL;

const fetchData = async () => {
    try {
        const response = await fetch(`${apiUrl}/api/example-endpoint`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data from the backend:", error);
    }
};

fetchData();
export default App;
