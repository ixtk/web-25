import "./App.css";
import { useState } from "react";
import { Product } from "./Product";

export function Store() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getProducts = async () => {
    setIsLoading(true);
    setError("");

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
      const response = await fetch("http://localhost:3000/products");
      const json = await response.json();
      setProductList(json);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
      console.log("ERROR:", error.message);
    }
  };

  const productListElements = productList.map((product) => {
    return (
      <Product
        key={product.id}
        id={product.id}
        title={product.title}
        imageUrl={product.image}
        price={product.price}
        productList={productList}
        setProductList={setProductList}
      />
    );
  });

  const createProduct = async () => {
    const newProduct = {
      id: "777",
      title: "TEST TEST LAPTOP",
      image:
        "https://helios-i.mashable.com/imagery/articles/05djrP5PjtVB7CcMtvrTOAP/images-4.fill.size_2000x1125.v1723100793.jpg",
      price: 12,
      description:
        "Rockerz 370 come equipped with latest Bluetooth v5.0 for instant wireless connectivity\r\nThe powerful 300mAh battery provides up to 8 Hours of audio bliss\r\n40mm Dynamic Drivers supply immersive High Definition sound\r\nThe headset has padded earcups for a comfortable experience\r\nThe headphone has been ergonomically and aesthetically designed for a seamless experience\r\nOne can connect to Rockerz 370 via dual modes for connectivity in the form of Bluetooth and AUX\r\n1 year warranty from the date of purchase.",
      brand: "boat",
      model: "Rockerz 370",
      color: "Black",
      category: "audio",
    };

    const response = await fetch("http://localhost:3000/products", {
      method: "post",
      body: JSON.stringify(newProduct),
    });

    setProductList([newProduct, ...productList]);
    
    // productList.push(newProduct)
  };

  return (
    <div>
      <h1>Store Playground</h1>
      <button onClick={getProducts}>Get all products</button>
      <button style={{ marginLeft: "8px" }} onClick={createProduct}>
        Create new
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="products-container">{productListElements}</div>
      )}
    </div>
  );
}
