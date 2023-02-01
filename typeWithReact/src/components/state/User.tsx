import React, { useState } from "react";

type UserProps = {
  name: string;
  email: string;
};

function User() {
  const [user, setUser] = useState<UserProps | null>(null);
  const handleLogin = () => {
    setUser({
      name: "Nidhi",
      email: "nidhi@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
}

export default User;
