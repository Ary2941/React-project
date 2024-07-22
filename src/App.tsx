import ListGroup from "./components/ListGroup"
function App(){
  let items = ["item 1", "item 2", "item 3", "item 4"];
  const handleSelectItem = (item:string) =>{
    console.log(item);
  }

  return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>
}

export default App;