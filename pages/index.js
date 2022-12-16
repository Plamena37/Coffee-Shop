// import { useEffect, useState } from "react";
import CoffeeList from "../components/coffees/CoffeeList";

const DUMMY_COFFEES = [
  {
    id: "c1",
    title: "Cappuccino",
    image: "https://www.worldatlas.com/r/w1200/upload/12/f8/83/coffee-cup.jpg",
    ingredient: "1/3 espresso, 1/3 steamed milk, and 1/3 foam",
    description: "Mix it up by using 2 or 3 tablespoons of flavored syrups",
  },
  {
    id: "c2",
    title: "Latte",
    image:
      "https://bakingmischief.com/wp-content/uploads/2019/10/easy-caramel-latte-image-square.jpg",
    ingredient: "2 cups milk,a single or double shot of espresso",
    description: "Heat milk. Whisk briskly. Brew espresso and pour",
  },
];

function HomePage(props) {
  // const [loadedCoffees, setLoadedCoffees] = useState([]);

  // useEffect(() => {
  //   // send http request and fetch data
  //   setLoadedCoffees(DUMMY_COFFEES);
  // }, []);

  return <CoffeeList coffees={props.coffees} />;
}

export async function getStaticProps() {
  // fetch data from API
  return {
    props: {
      coffees: DUMMY_COFFEES,
    },
    // the page will be regenerated every 10s
    revalidate: 10,
  };
}

/*
export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  //will not run during the build process but always on the server after deployment
  return {
    props: { coffees: DUMMY_COFFEES },
  };
}
*/

export default HomePage;
