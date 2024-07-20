import { MouseEvent, useState } from "react";

function ListGroup() {
  let items = ["item 1", "item 2", "item 3", "item 4"];
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
      <h1 className="title"> ListGroup </h1>
      {getMessage}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className={selectedIndex === index? "list-group-item active":"list-group-item"} key={item} onClick={()=> {setSelectedIndex(index)}} >{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
