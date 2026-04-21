import DropdownItem from './DropdownItem';

function DropdownList({ items, selectedItem, onSelectItem }) {
  return (
    <ul className="dropdown">
      {items.map((item, index) => (
        <DropdownItem
          key={index}
          item={item}
          isActive={item === selectedItem}
          onSelect={onSelectItem}
        />
      ))}
    </ul>
  );
}

export default DropdownList;