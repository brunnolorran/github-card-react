import "./App.css";

import { useState, useEffect } from "react";

import CardUser from "./components/card-user";

import { Button } from "antd";

const App = () => {
  const [user, setUser] = useState("");
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    fetch("https://api.github.com/users/brunnolorran").then((response) =>
      response.json().then((data) => setUser(data))
    );
  };

  const actived = () => {
    if (active === false) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(handleToggle);

  return (
    <div className="App">
      <div>
        <Button className="topbar" type="primary" onClick={actived}>
          Mostrar/Ocultar
        </Button>
      </div>
      {active && (
        <CardUser
          image={user.avatar_url}
          name={user.name}
          location={user.location}
          site={user.html_url}
        />
      )}
    </div>
  );
};

export default App;
