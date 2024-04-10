import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [count, setCount] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    if (!description) return;

    const newItem = { description, count, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setCount(1);
  }

  function handleInputChange(event) {
    setDescription(event.target.value);
  }

  function handleSelectChange(event) {
    setCount(Number(event.target.value));
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip? </h3>

      <select onChange={handleSelectChange} value={count} autoFocus>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((key) => {
          return (
            <option value={key} key={key}>
              {key}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        //event
        onChange={handleInputChange}
      />
      <button>Add</button>
    </form>
  );
}
