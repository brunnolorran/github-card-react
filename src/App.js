import "./App.css";

import { useState } from "react";

const App = () => {
  const [user, setUser] = useState("");

  const handleToggle = () => {
    fetch("https://api.github.com/users/brunnolorran").then((response) =>
      response.json().then((data) => setUser(data.name))
    );
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inicial</h1>
        {user}
        <button onClick={handleToggle}>Testar handle</button>
      </header>
    </div>
  );
};

export default App;
