
export default function Item  ({ item, onDelete, onToggleItem }){
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onToggleItem(item.id);
        }} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}{" "}
        {item.description.length <= 16
          ? item.description
          : item.description.slice(0, 16)}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
};
