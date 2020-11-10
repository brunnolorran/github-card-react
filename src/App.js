import "./App.css";

import { useState, useEffect } from "react";

import CardUser from "./components/card-user";

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
      <header className="App-header">
        <h1>GitHub Card</h1>

        {active && (
          <CardUser
            image={user.avatar_url}
            name={user.name}
            location={user.location}
            site={user.html_url}
          />
        )}
        <button onClick={actived}>Mostrar/Ocultar</button>
      </header>
    </div>
  );
};

export default App;
