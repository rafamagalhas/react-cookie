import React from "react";
import Cookies from "universal-cookie";

export default function App() {
  const cookies = new Cookies();

  function handleCookie() {
    cookies.set("user", "rafa", { path: "/" });
    console.log(cookies.get("user"));
  }
  return (
    <div className="App">
      <h1>React cookies</h1>
      <button onClick={handleCookie}>Set Cookie</button>
    </div>
  );
}
