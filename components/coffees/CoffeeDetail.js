import styles from "./CoffeeDetail.module.css";

function CoffeeDetail(props) {
  return (
    <section className={styles.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.ingredients}</p>
      <p>{props.description}</p>
    </section>
  );
}

export default CoffeeDetail;
