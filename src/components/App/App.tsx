import Keyboard from "../Keyboard/Keyboard";
import Actions from "../Actions/Actions";

function App() {
  return (
    <div className="container">
      <span className="message off">Calling...</span>
      <main className="phone">
        <Keyboard />
        <Actions />
      </main>
    </div>
  );
}

export default App;
