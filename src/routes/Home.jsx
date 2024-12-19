import { useSelector } from "react-redux";
import HomeImageCarousel from "../components/HomeImageCarousel";
import Vehicles from "../components/Vehicles";
import "../index.css";

const Home = () => {
  const items = useSelector((store) => store.items);

  return (
    <>
      <HomeImageCarousel />
      <div className="vehicles_container">
        {items.map((item) => (
          <Vehicles key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Home;
