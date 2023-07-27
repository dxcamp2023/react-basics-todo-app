import React from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = React.useState([]);
  const [tasksIndex, setTasksIndex] = React.useState(undefined);
  const [buttonText, setButtonText] = React.useState("Add");
  const [inputval, setInputval] = React.useState("");

  const handleAdd = () => {
    if (inputval.trim() !== "") {
      setTasks([
        ...tasks,
        {
          done: false,
          text: inputval,
        },
      ]);

      setInputval("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    setInputval("");
    setButtonText("Add");
  };

  const handleInputChange = (event) => {
    setInputval(event.target.value);
  };

  const handleToggleTodo = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const handleSaveTodo = () => {
    if (inputval.trim() !== "") {
      const newTasks = [...tasks];
      newTasks[tasksIndex].text = inputval;
      setTasks(newTasks);
      setButtonText("Add");
      setInputval("");
    }
  };

  const handleEditTodo = (index) => {
    setInputval(tasks[index].text);
    setButtonText("Save");
    setTasksIndex(index);
  };

  return (
    <>
      <div className="main">
        <div className="card">
          <h1>Todo App</h1>
          <div className="todos">
            <Form
              inputval={inputval}
              handleInputChange={handleInputChange}
              handleAdd={handleAdd}
              handleSaveTodo={handleSaveTodo}
              buttonText={buttonText}
              index={tasksIndex}
            />
            <TodoList
              tasks={tasks}
              handleDeleteTodo={handleDeleteTodo}
              handleToggleTodo={handleToggleTodo}
              handleEditTodo={handleEditTodo}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
