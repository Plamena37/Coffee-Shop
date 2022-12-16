import { useRef } from "react";

import Card from "../ui/Card";
import styles from "./NewCoffeeForm.module.css";

function NewCoffeeForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const ingredientsInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredIngredients = ingredientsInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const coffeeData = {
      title: enteredTitle,
      image: enteredImage,
      ingredients: enteredIngredients,
      description: enteredDescription,
    };

    props.onAddCoffee(coffeeData);
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">Coffee Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Coffee Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="ingredients">Ingredients</label>
          <input
            type="text"
            required
            id="ingredients"
            ref={ingredientsInputRef}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Add Coffee</button>
        </div>
      </form>
    </Card>
  );
}

export default NewCoffeeForm;
