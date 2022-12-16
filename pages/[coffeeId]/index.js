import CoffeeDetail from "../../components/coffees/CoffeeDetail";

function CoffeeDetails() {
  return (
    <CoffeeDetail
      image="https://www.worldatlas.com/r/w1200/upload/12/f8/83/coffee-cup.jpg"
      title="Cappuccino"
      ingredient="1/3 espresso, 1/3 steamed milk, and 1/3 foam"
      description="Mix it up by using 2 or 3 tablespoons of flavored syrups"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          coffeeId: "c1",
        },
      },
      {
        params: {
          coffeeId: "c2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single coffee

  const coffeeId = context.params.coffeeId;

  return {
    props: {
      coffeeData: {
        image:
          "https://www.worldatlas.com/r/w1200/upload/12/f8/83/coffee-cup.jpg",
        id: coffeeId,
        title: "Cappuccino",
        ingredient: "1/3 espresso, 1/3 steamed milk, and 1/3 foam",
        description: "Mix it up by using 2 or 3 tablespoons of flavored syrups",
      },
    },
  };
}

export default CoffeeDetails;
