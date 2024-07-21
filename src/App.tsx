import ListGroup from "./components/ListGroup"
function App(){
  let items = ["item 1", "item 2", "item 3", "item 4"];


  return <div><ListGroup items={items} heading="Cities"/></div>
}

export default App;