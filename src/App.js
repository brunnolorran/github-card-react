import "./App.css";

import { useState } from "react";
import CardUser from "./components/card-user";
import { Button, Input, Switch } from "antd";

const App = () => {
  const [user, setUser] = useState("");
  const [active, setActive] = useState(false);
  const [input, setInput] = useState("");

  const URL_GITHUB_API = `https://api.github.com/users/${input}`;

  const actived = () => {
    if (active === false) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const handleToggle = () => {
    if (input) {
      fetch(URL_GITHUB_API).then((response) =>
        response.json().then((data) => setUser(data))
      );
      setActive(true);
    }
  };

  return (
    <div className="App">
      <div>
        <Input
          style={{ width: 200, marginBottom: 30, marginTop: 30 }}
          placeholder="Ex. brunnolorran"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="primary" onClick={handleToggle}>
          Pesquisar usuário GitHub
        </Button>
      </div>

      {user && (
        <Switch
          style={{ marginBottom: 10 }}
          defaultChecked
          checkedChildren="Ocultar"
          unCheckedChildren="Mostrar"
          onChange={actived}
        />
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
