import ImageSlider from "../components/ImageSlider/ImageSlider";
import "react-slideshow-image/dist/styles.css";
import BestSellers from "../components/BestSellers/BestSellers";
import ParallaxSection from "../components/ParallaxSection/ParallaxSection";

const Home = () => {
  return (
    <div>
      <ImageSlider />
      <h1>Best sellers</h1>
      <BestSellers />
      <ParallaxSection />
    </div>
  );
};

export default Home;
