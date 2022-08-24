import "./App.css";
import Game from "./components/Game/Game";
import History from "./components/History/History";

function App() {
  const title = "Tic Tac Toe";
  return (
    <div className="container">
      <Game title={title} />
      <History />
    </div>
  );
}

export default App;
