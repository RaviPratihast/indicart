import { createContext, useReducer } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { products } from "../../data/data"; // Ensure this path is correct
import { ProductReducer } from "../../Reducers/ProductReducer"; // Ensure this path is correct

// Create a context with null as the default value
const ProductContext = createContext(null);

// Custom hook to use the ProductContext
// const useProduct = () => useContext(ProductContext);

// Initial state
const initialState = {
  originalProduct: products,
  initialProduct: products,
  wishlist: [],
  cart: [],
};

// Context provider component
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

// Add prop-types validation
ProductProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is required and is a node
};

export { ProductProvider, ProductContext };
