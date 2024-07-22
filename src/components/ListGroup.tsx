import { MouseEvent, useState } from "react";

interface ListGroupProps {
  items : string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: ListGroupProps) {
  // StateHook
  const [selectedIndex, setSelectedIndex] = useState (-1);
   // arr[0]variável (selectedIndex)
  //  arr[1]função de att.

  const getMessage = () => {
    return items.length === 0 && <p> Nothing found</p>;
  }

  // event handle
  const handleClickShowEvent = (event: MouseEvent) => {
    console.log(event)
  };
  
  return (
    <>
      <h1 className="title"> {heading} </h1>
      {getMessage}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className={selectedIndex === index? "list-group-item active":"list-group-item"} key={item} onClick={()=> {setSelectedIndex(index); onSelectItem(item)}} >{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
