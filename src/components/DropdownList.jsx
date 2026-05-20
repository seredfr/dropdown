import DropdownItem from './DropdownItem';

function DropdownList({ items, selectedItem, onSelectItem }) {
  return (
    <ul className="dropdown">
      {items.map((item) => (
        <DropdownItem
          key={item}
          item={item}
          isActive={item === selectedItem}
          onSelect={onSelectItem}
        />
      ))}
    </ul>
  );
}

export default DropdownList;