/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

export const TodoList = () => {
  return (
    <div className="list-items">
      <TodoItem />
      <div>Empty List . . .</div>
    </div>
  );
};

export default TodoList;
