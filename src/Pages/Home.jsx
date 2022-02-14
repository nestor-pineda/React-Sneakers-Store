import ImageSlider from "../components/ImageSlider/ImageSlider";
import "react-slideshow-image/dist/styles.css";
import BestSellers from "../components/BestSellers/BestSellers";

const Home = () => {
  return (
    <div>
      <ImageSlider />
      <h1>Best sellers</h1>
      <BestSellers />
    </div>
  );
};

export default Home;
