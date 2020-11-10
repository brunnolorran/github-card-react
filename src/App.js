import "./App.css";

import { useState, useEffect } from "react";

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
          <div>
            <img src={user.avatar_url} alt={`Foto de ${user.name}`} />
            <p>{user.name}</p>
            <p>{user.location}</p>
            <a href={user.html_url}>Link</a>
          </div>
        )}
        <button onClick={actived}>Mostrar/Ocultar</button>
      </header>
    </div>
  );
};

export default App;
