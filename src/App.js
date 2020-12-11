// import logo from "./public/assets/logo/logo.svg";
import "./App.scss";
import Container from "./components/Container";
import OnePieceLaughGame from "./components/OnePieceLaughGame";
import WordGame from "./components/WordGame";

function App() {
  return (
    <div className="App">
      <Container>
        <OnePieceLaughGame />
      </Container>
    </div>
  );
}

export default App;
