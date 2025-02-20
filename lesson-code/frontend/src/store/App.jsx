import "./App.css"
import { useState } from "react"
import { Product } from "./Product"

export function Store() {
  const [productList, setProductList] = useState([])
  const [error, setError] = useState("")

  const getProducts = async () => {
    // todo...
  }

  const productListElements = productList.map((product) => {
    return (
      <Product
        key={product.id}
        title={product.title}
        imageUrl={product.image}
        price={product.price}
      />
    )
  })

  return (
    <div>
      <h1>Store Playground</h1>
      <button onClick={getProducts}>Get all products</button>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="products-container">{productListElements}</div>
    </div>
  )
}
