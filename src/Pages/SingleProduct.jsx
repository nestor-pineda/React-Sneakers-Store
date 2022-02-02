import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>This is the singel product page with id: {id}</h1>
    </div>
  );
};

export default SingleProduct;
