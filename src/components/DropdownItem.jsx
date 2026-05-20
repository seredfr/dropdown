function DropdownItem({ item, isActive, onSelect }) {
  const itemStyle = {
    backgroundColor: isActive ? '#e0e0e0' : '#ffffff',
    cursor: 'pointer'
  };

  return (
    <li 
      className={isActive ? 'active' : ''}
      style={itemStyle}
      onClick={() => onSelect(item)}
    >
      <a href="#" onClick={(e) => e.preventDefault()}>{item}</a>
    </li>
  );
}

export default DropdownItem;