import "./App.css"
import { useState } from "react"
import { Product } from "./Product"

export function Store() {
  const [productList, setProductList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const getProducts = async () => {
    setIsLoading(true)
    setError("")

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
      const response = await fetch("http://localhost:3000/products")
      const json = await response.json()
      setProductList(json)
      setIsLoading(false)
    } catch (error) {
      setError(error.message)
      setIsLoading(false)
      console.log("ERROR:", error.message)
    }
  }

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
    )
  })

  return (
    <div>
      <h1>Store Playground</h1>
      <button onClick={getProducts}>Get all products</button>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="products-container">{productListElements}</div>
      )}
    </div>
  )
}
