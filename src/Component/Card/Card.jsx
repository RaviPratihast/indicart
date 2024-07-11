// import PropTypes from "prop-types";
import { Button } from "../component-index";

const Card = ({ title, price, image }) => {
  return (
    <div className="w-80 rounded overflow-hidden shadow-lg border border-gray-300 m-2 flex flex-col justify-between">
      {/* image container */}
      <div className="p-4">
        <img
          className="w-full h-72 max-w-full max-h-full object-contain"
          src={image}
          alt={title}
        />
      </div>

      {/* Title, price, and add to cart button container */}
      <div className="">
        <div className="p-4 flex-grow">
          <div className="font-bold text-xl mb-2 truncate">{title}</div>
          <p className="text-gray-700 text-base">₹{price}</p>
        </div>
        <div className="p-4">
          <Button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
            Add To Cart
          </Button>
        </div>
      </div>

      {/* end of the line */}
    </div>
  );
};

export { Card };
