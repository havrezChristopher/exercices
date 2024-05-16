import "./App.css";
import Exercices_One from "./Composant/Exercices_1/Exercices_One";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <fieldset>
          <legend>
            <h1>Exercices 1</h1>
          </legend>
          <p>Reproduire une palette de couleur RGB </p>
          <p></p>
          <Exercices_One />
        </fieldset>
      </header>
    </div>
  );
}

export default App;
