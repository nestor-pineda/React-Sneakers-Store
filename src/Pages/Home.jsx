import ImageSlider from "../components/ImageSlider/ImageSlider";
import "react-slideshow-image/dist/styles.css";
import BestSellers from "../components/BestSellers/BestSellers";
import ParallaxSection from "../components/ParallaxSection/ParallaxSection";
import { StyledH1 } from "./styles";

const Home = () => {
  return (
    <div>
      <ImageSlider />
      <StyledH1>Best sellers</StyledH1>
      <BestSellers />
      <ParallaxSection />
    </div>
  );
};

export default Home;
