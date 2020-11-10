import "./App.css";

import { useState } from "react";
import CardUser from "./components/card-user";
import { Button, Input } from "antd";

const App = () => {
  const [user, setUser] = useState("");
  const [active, setActive] = useState(false);
  const [input, setInput] = useState("");

  const URL_GITHUB_API = `https://api.github.com/users/${input}`;

  const handleToggle = () => {
    if (input) {
      fetch(URL_GITHUB_API).then((response) =>
        response.json().then((data) => setUser(data))
      );
      setActive(true);
    }
  };

  const actived = () => {
    if (active === false) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <div className="App">
      <div>
        <Input
          style={{ width: 200, marginBottom: 30 }}
          placeholder="Ex. brunnolorran"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button className="topbar" type="primary" onClick={handleToggle}>
          Pesquisar usuário GitHub
        </Button>
      </div>

      {user && (
        <Button type="secondy" onClick={actived}>
          ocultar/mostrar
        </Button>
      )}

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
