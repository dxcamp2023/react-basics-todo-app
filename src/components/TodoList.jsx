/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

export const TodoList = ({
  tasks,
  handleDeleteTodo,
  handleToggleTodo,
  handleEditTodo,
}) => {
  return (
    <div className="list-items">
      {tasks.length ? (
        tasks.map((task, index) => (
          <TodoItem
            key={index}
            index={index}
            task={task}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleTodo={handleToggleTodo}
            handleEditTodo={handleEditTodo}
          />
        ))
      ) : (
        <div>Empty List . . .</div>
      )}
    </div>
  );
};

export default TodoList;
