import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const title = "Tic Tac Toe";
  return (
    <div className="container">
      <section>
        <Header title={title} />
        <main>Playing table</main>
        <section>buttons</section>
      </section>
      <section>
        <main>History</main>
      </section>
    </div>
  );
}

export default App;
