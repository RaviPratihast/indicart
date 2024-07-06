// import { createContext, useContext, useReducer } from "react";
// import { products } from "../../data/data";
// import { ProductReducer } from "../../Reducers/ProductReducer";

// const ProductContext = createContext(null);
// const useProduct = () => useContext(ProductContext);

// let initialState = {
//   originalProduct: products,
//   initialProduct: products,
//   wishlist: [],
//   cart: [],
// };

// const ProductProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(ProductReducer, initialState);
//   return (
//     <ProductContext.Provider value={{ state, dispatch }}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

// export { ProductProvider, useProduct };

import { createContext, useContext, useReducer } from "react";
import { products } from "../../data/data"; // Ensure this path is correct
import { ProductReducer } from "../../Reducers/ProductReducer"; // Ensure this path is correct

// Create a context with an empty object as the default value
const ProductContext = createContext({});

// Custom hook to use the ProductContext
const useProduct = () => useContext(ProductContext);

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

export { ProductProvider, useProduct };

// import { createContext, useContext, useReducer } from "react";
// import videos from "../../Data/UserData";
// import VideoReducer from "../../Reducers/VideoReducer";

// const VideoContext = createContext(null);
// const useVideo = () => useContext(VideoContext);

// let initialState = {
//   originalData: videos,
//   initialVideo: videos,
//   liked: [],
//   watchLater: [],
//   playlists: [],
//   history: [],
//   filteredVideos: videos,
// };

// const VideoProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(VideoReducer, initialState);
//   return (
//     <VideoContext.Provider value={{ state, dispatch }}>
//       {children}
//     </VideoContext.Provider>
//   );
// };

// export { VideoProvider, useVideo };
