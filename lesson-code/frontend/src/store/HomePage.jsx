import "./App.css";
import { useEffect, useState } from "react";
import { Product } from "./Product";

export function HomePage() {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState("");

  const getProducts = async () => {
    // fetch("https://fakestoreapi.in/api/products")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((json) => {
    //     setProductList(json.products)
    //     console.log(json);
    //   });
    
    const response = await fetch("http://localhost:3333/products")
    const json = await response.json()
    
    setProductList(json)
  };

  useEffect(() => {
    console.log("Running on first render!")
    getProducts()
  }, [])

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

  const addNewProduct = async () => {
    const newProduct = {
      "id": 123412341,
      "title": "TEST TEST LAPTOP!!!",
      "image": "https://techterms.com/img/xl/laptop_586.png",
      "price": 9999,
      "description": "cool laptop",
      "brand": "microsoft",
      "model": "Xbox X/S",
      "color": "white",
      "category": "gaming",
      "popular": true,
      "discount": 4
    }

    const response = await fetch("http://localhost:3333/products", {
      method: "post",
      body: JSON.stringify(newProduct)
    })

    setProductList([
      newProduct, ...productList
    ])
  }

  return (
    <div>
      <h1>Store Playground</h1>
      {/* <button onClick={getProducts}>Get all products</button> */}
      <button onClick={addNewProduct}>Add new</button>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="products-container">{productListElements}</div>
    </div>
  );
}
