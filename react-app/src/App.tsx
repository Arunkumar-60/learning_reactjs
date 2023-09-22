import ListGroup from "./components/ListGroup";
function App() {
  let items = ["newyork", "paris", "melbourne", "london", "india"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
