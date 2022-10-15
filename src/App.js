import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProduct } from "./Redux/productsSlice";

function App() {
  const [count, setCount] = useState(0);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  useEffect(() => {
    console.log("products :", products);
  }, [products]);

  return (
    <>
      <div className="">
        {products.data.map((product) => (
          <div>{product.title}</div>
        ))}
      </div>
    </>
  );
}

export default App;
