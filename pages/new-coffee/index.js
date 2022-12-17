// domain.com/new-coffee
import { useRouter } from "next/router";
import NewCoffeeForm from "../../components/coffees/NewCoffeeForm";
import Head from "next/document";
import { Fragment } from "react";

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

  return (
    <Fragment>
      {/* <Head>
        <title>Coffe Shop &mdash; add new coffee</title>
        <meta name="description" content="Add new coffee" />
      </Head> */}
      <NewCoffeeForm onAddCoffee={addCoffeeHandler} />
    </Fragment>
  );
}

export default NewCoffeePage;
