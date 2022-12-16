// domain.com/new-coffee
import NewCoffeeForm from "../../components/coffees/NewCoffeeForm";

function NewCoffeePage() {
  function addCoffeeHandler(enteredCoffeeData) {
    console.log(enteredCoffeeData);
  }

  return <NewCoffeeForm onAddCoffee={addCoffeeHandler} />;
}

export default NewCoffeePage;
