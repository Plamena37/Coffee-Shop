import { useRouter } from "next/router";
import Card from "../ui/Card";
import styles from "./CoffeeItem.module.css";

function CoffeeItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    // same as Link component
    router.push("/" + props.id);
  }

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <p>{props.ingredient}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default CoffeeItem;
