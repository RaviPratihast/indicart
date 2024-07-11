import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext/ProductContext";

const useProduct = () => useContext(ProductContext);

export { useProduct };
