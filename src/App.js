import React from "react";
import "./styles.css";
import { useUser } from "./users";
import { useCurrentUserId } from "./userSession";

export default function App() {
  const currentUserId = useCurrentUserId();
  const me = useUser(currentUserId);
  return (
    <div className="App">
      <h1>Hello, {me.name}</h1>
    </div>
  );
}
