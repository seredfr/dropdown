import { useState, useEffect, useRef } from 'react';
import DropdownList from './DropdownList';

function Dropdown({ items, defaultItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultItem || items[0]);
  const wrapperRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;
    
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div 
      className={`dropdown-wrapper ${isOpen ? 'open' : ''}`} 
      ref={wrapperRef}
    >
      <button className="btn" onClick={toggleDropdown}>
        <span>{selectedItem}</span>
      </button>
      <DropdownList
        items={items}
        selectedItem={selectedItem}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default Dropdown;