import CoffeeItem from "./CoffeeItem";
import styles from "./CoffeeList.module.css";

function CoffeeList(props) {
  return (
    <ul className={styles.list}>
      {props.coffees.map((coffee) => (
        <CoffeeItem
          key={coffee.id}
          id={coffee.id}
          image={coffee.image}
          title={coffee.title}
          ingredients={coffee.ingredients}
        />
      ))}
    </ul>
  );
}

export default CoffeeList;
