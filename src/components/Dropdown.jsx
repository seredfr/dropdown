import { useState } from 'react';
import DropdownList from './DropdownList';

function Dropdown({ items, defaultItem, buttonText }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultItem || items[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className={`dropdown-wrapper ${isOpen ? 'open' : ''}`}>
      <button className="btn" onClick={toggleDropdown}>
        <span>{buttonText || selectedItem}</span>
        <i className="material-icons">public</i>
      </button>
      {isOpen && (
        <DropdownList
          items={items}
          selectedItem={selectedItem}
          onSelectItem={handleSelectItem}
        />
      )}
    </div>
  );
}

export default Dropdown;