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

function HomePage() {
  return <CoffeeList coffees={DUMMY_COFFEES} />;
}
export default HomePage;
