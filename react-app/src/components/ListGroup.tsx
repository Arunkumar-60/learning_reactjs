// {items :[],handeling :string}
interface Props {
  items: string[];
  heading: string;
  // (item:string)=> void
  onSelectItem: (item: string) => void;
}
import { Fragment, useState } from "react";

function ListGroup({ items, heading, onSelectItem }: Props) {
  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //event handling

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>no item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
