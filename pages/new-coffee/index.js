// domain.com/new-coffee
import { useRouter } from "next/router";
import NewCoffeeForm from "../../components/coffees/NewCoffeeForm";

function NewCoffeePage() {
  const router = useRouter();

  async function addCoffeeHandler(enteredCoffeeData) {
    const response = await fetch("/api/new-coffee", {
      method: "POST",
      body: JSON.stringify(enteredCoffeeData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.json();
    console.log(data);

    router.push("/");
  }

  return <NewCoffeeForm onAddCoffee={addCoffeeHandler} />;
}

export default NewCoffeePage;
