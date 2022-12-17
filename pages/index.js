import CoffeeList from "../components/coffees/CoffeeList";
import { MongoClient } from "mongodb";

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
  const client = await MongoClient.connect(
    "mongodb+srv://plamena:99100316Pi@cluster0.xwlwv4y.mongodb.net/coffees?retryWrites=true&w=majority"
  );
  const db = client.db();

  const coffeesCollection = db.collection("coffees");

  const coffees = await coffeesCollection.find().toArray();

  client.close();

  return {
    props: {
      coffees: coffees.map((coffee) => ({
        title: coffee.title,
        image: coffee.image,
        ingredients: coffee.ingredients,
        id: coffee._id.toString(),
      })),
    },
    // the page will be regenerated every 5s
    revalidate: 5,
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
