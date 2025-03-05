import { useEffect, useState } from "react"
import { useParams } from "react-router"

export const ProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true)
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`)

        if (!response.ok && response.status === 404) {
          throw new Error("Product not found")
        }

        const json = await response.json()

        setProduct(json)
        setLoading(false)
      } catch (error) {
        setError(error.message || "Something went wrong")
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  const updatePrice = (event) => {
    event.preventDefault()

    console.log("New price:", product.price)

    fetch(`http://localhost:3000/products/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ price: product.price })
    }).then((response) => {
      // if (!response.ok) {
      // }
      // check if request succeeded
    })
  }

  if (loading) return <p>Loading...</p>

  if (error) return <p>{error}</p>

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt="" />
      <form onSubmit={updatePrice}>
        <fieldset role="group">
          <input
            type="number"
            value={product.price}
            placeholder="Enter new price"
            onChange={(event) => {
              setProduct({ ...product, price: event.target.value })
            }}
          />
          <input type="submit" value="Update" />
        </fieldset>
      </form>
      <p>{product.description}</p>
    </div>
  )
}
