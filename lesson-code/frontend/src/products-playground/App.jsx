import "./App.css";
import { useState } from "react";

export function ProductsPlayground() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getProducts = async () => {
    setIsLoading(true);

    /*
    fetch("https://fakestoreapi.in/api/products")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setProductList(json.products);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message)
        setIsLoading(false)
        console.log("ERROR:", error.message);
      });
      */

    try {
      const response = await fetch("https://fakestoreapi.in/api/products");
      const json = await response.json();
      setProductList(json.products);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
      console.log("ERROR:", error.message);
    }
  };

  return (
    <div>
      <h1>Products Playground</h1>
      <button onClick={getProducts}>Get all products</button>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {productList.map((pr) => {
            return <li key={pr.title}>{pr.title}</li>;
          })}
        </ul>
      )}

      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
}
