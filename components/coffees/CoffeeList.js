import CoffeeItem from "./CoffeeItem";
import classes from "./CoffeeList.module.css";

function CoffeeList(props) {
  return (
    <ul className={classes.list}>
      {props.coffees.map((coffee) => (
        <CoffeeItem
          key={coffee.id}
          id={coffee.id}
          image={coffee.image}
          title={coffee.title}
          ingredient={coffee.ingredient}
        />
      ))}
    </ul>
  );
}

export default CoffeeList;
