import CoffeeDetail from "../../components/coffees/CoffeeDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

function CoffeeDetails(props) {
  return (
    <Fragment>
      {/* <Head>
        <title>Coffe Shop &mdash; {props.coffeeData.title}</title>
        <meta name="description" content={props.coffeeData.description} />
      </Head> */}
      <CoffeeDetail
        image={props.coffeeData.image}
        title={props.coffeeData.title}
        ingredients={props.coffeeData.ingredients}
        description={props.coffeeData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://plamena:99100316Pi@cluster0.xwlwv4y.mongodb.net/coffees?retryWrites=true&w=majority"
  );
  const db = client.db();

  const coffeesCollection = db.collection("coffees");

  const coffees = await coffeesCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: coffees.map((coffee) => ({
      params: { coffeeId: coffee._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single coffee

  const coffeeId = context.params.coffeeId;

  const client = await MongoClient.connect(
    "mongodb+srv://plamena:99100316Pi@cluster0.xwlwv4y.mongodb.net/coffees?retryWrites=true&w=majority"
  );
  const db = client.db();

  const coffeesCollection = db.collection("coffees");

  const selectedCoffee = await coffeesCollection.findOne({
    _id: ObjectId(coffeeId),
  });

  client.close();

  return {
    props: {
      coffeeData: {
        id: selectedCoffee._id.toString(),
        image: selectedCoffee.image,
        title: selectedCoffee.title,
        ingredients: selectedCoffee.ingredients,
        description: selectedCoffee.description,
      },
    },
  };
}

export default CoffeeDetails;
