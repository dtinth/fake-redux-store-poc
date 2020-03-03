import React from "react";
import { useUser } from "../features/users";
import { useCurrentUserId } from "../features/userSession";

export default function App() {
  const currentUserId = useCurrentUserId();
  const me = useUser(currentUserId);
  return (
    <div className="App">
      <h1>Hello, {me.name}</h1>
    </div>
  );
}
