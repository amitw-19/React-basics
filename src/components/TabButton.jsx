//props.children => for components internal content. ex.=>button. {component composition}.
//{children} => to show names of the buttons.}
export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
