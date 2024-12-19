import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import "../components/bag.css";

const Bag = () => {
  const item = {
    id: 1,
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    color: "Silver",
    mileage: 20000,
    price: 25000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    engine: "2.0L 4-cylinder",
    horsepower: 169,
    features: ["Bluetooth", "Backup Camera", "Keyless Entry"],
    owners: 1,
    image: "cars_ Carousel_1/car1.jpg",
  };
  return (
    <>
      <main>
        <div className="bag-page">
          <BagItem item={item} />
          <BagSummary />
        </div>
      </main>
    </>
  );
};

export default Bag;
