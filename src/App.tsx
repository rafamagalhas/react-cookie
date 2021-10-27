import React from "react";
import { useCookies } from "react-cookie";

export default function App() {
  const [cookies, setCookie] = useCookies(["user"]);

  function handleCookie() {
    setCookie("user", "gowtham", {
      path: "/"
    });
    console.log(cookies.user);
  }
  return (
    <div className="App">
      <h1>React cookies</h1>
      <button onClick={handleCookie}>Set Cookie</button>
    </div>
  );
}
