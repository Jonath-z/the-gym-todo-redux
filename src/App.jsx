import InputBar from "./components/InputBar";
import TodosContainer from "./components/TodosContainer";

function App() {
  return (
    <div className="w-screen bg-orange-100 h-screen overflow-y-auto">
      <div className="max-w-3xl pt-20 mx-auto px-5">
        <InputBar />
        <TodosContainer />
      </div>
    </div>
  );
}

export default App;
