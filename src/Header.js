import React, { useState } from "react";
const Header = () => {
  const [selectedOption, setSelectedOption] = useState(""); // State to store the selected option
  const [inputValue, setInputValue] = useState(""); // State to store the input value
  const [items, setItems] = useState({}); // State to store items for each option

  // Handler for changing the selected option
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Handler for updating the input value
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handler for adding items to the card
  const addItemToCard = () => {
    if (selectedOption && inputValue) {
      setItems((prevItems) => ({
        ...prevItems,
        [selectedOption]: [...(prevItems[selectedOption] || []), inputValue],
      }));
      setInputValue("");
    }
  };

  // Handler for deleting an item from the card
  const deleteItem = (option, index) => {
    setItems((prevItems) => {
      const updatedItems = { ...prevItems };
      updatedItems[option].splice(index, 1);
      return updatedItems;
    });
  };

  return (
    <div>
      <h1 className="t-c">Shopping Checklist:</h1>
      <div className="select">
        <select
          value={selectedOption}
          onChange={handleSelectChange}
          className="categories t-c"
        >
          <option value="">Select an option</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Fruits">Fruits</option>
          <option value="Electricals">Electricals</option>
          <option value="Cloths">Cloths</option>
          <option value="Washroom Things">Washroom Things</option>
          <option value="Bedroom Things">Bedroom Thing</option>
        </select>
        <div className="input-box t-c">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter text"
          />
        </div>
        <button className="add-btn" onClick={addItemToCard}>
          Add to Cart
        </button>
      </div>
      <br />
      {/* Render all cards for selected components */}
      <div className="card">
        {Object.keys(items).map((option) => (
          <div key={option} className="card-head">
            <div className="head-option">
              <span className="option">{option}</span>
              <span className="count">({items[option].length})</span>
            </div>

            <div>
              {items[option].map((item, index) => (
                <div key={index} className="card-item">
                  {index + 1} {item}
                  <button
                    className="remove-item"
                    onClick={() => deleteItem(option, index)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Header;
