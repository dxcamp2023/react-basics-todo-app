/* eslint-disable react/prop-types */
export const TodoItem = ({
  task,
  index,
  handleDeleteTodo,
  handleToggleTodo,
  handleEditTodo,
}) => {
  return (
    <div className={`item ${task.done && "done"}`}>
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => handleToggleTodo(index)}
        />
      </div>
      <span>{task.text}</span>
      <button onClick={() => handleEditTodo(index)}>Edit</button>
      <button onClick={() => handleDeleteTodo(index)}>X</button>
    </div>
  );
};

export default TodoItem;
