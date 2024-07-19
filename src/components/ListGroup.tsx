function ListGroup() {
  let items = ["item 1", "item 2", "item 3", "item 4"];

  items = [];

  const getMessage = () => {
    return items.length === 0 && <p> Nothing found</p>;
  }
  
  return (
    <>
      <h1> ListGroup </h1>
      {getMessage}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
