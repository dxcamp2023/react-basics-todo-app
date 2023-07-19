/* eslint-disable react/prop-types */
export const TodoItem = () => {
  return (
    <div className="item">
      <div className="checkbox-wrapper">
        <input type="checkbox" />
      </div>
      <span>Task</span>
      <button>Edit</button>
      <button>X</button>
    </div>
  );
};

export default TodoItem;
