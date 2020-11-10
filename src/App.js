import "./App.css";

const App = () => {
  const handleToggle = () => {
    console.log("Verificado");
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inicial</h1>
        <button onClick={() => handleToggle()}>Testar handle</button>
      </header>
    </div>
  );
};

export default App;
