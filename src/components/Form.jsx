/* eslint-disable react/prop-types */
export const Form = ({
  inputval,
  handleInputChange,
  handleAdd,
  buttonText,
  handleSaveTodo,
}) => {
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Write your tasks here"
        onChange={handleInputChange}
        value={inputval}
      />
      <button onClick={buttonText === "Save" ? handleSaveTodo : handleAdd}>
        {buttonText}
      </button>
    </div>
  );
};

export default Form;
