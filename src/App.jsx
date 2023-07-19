import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div className="main">
        <div className="card">
          <h1>Todo App</h1>
          <div className="todos">
            <Form />
            <TodoList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
