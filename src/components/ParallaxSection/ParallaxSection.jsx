import { Parallax } from "react-parallax";
import "./styles.scss";

const ParallaxSection = () => {
  return (
    <div>
      <Parallax bgImage={"images/slider-1.jpg"} strength={400}>
        <div className="container-parallax">
          <div className="box-parallax">
            <h3 className="title">Suscribe Now!</h3>
            <form>
              <div class="question">
                <input type="text" required />
                <label>First Name</label>
              </div>
              <div class="question">
                <input type="text" required />
                <label>Last Name</label>
              </div>
              <div class="question">
                <input type="text" required />
                <label>Email Address</label>
              </div>
              <div class="question">
                <input type="text" required />
                <label>Email Confirm</label>
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxSection;
