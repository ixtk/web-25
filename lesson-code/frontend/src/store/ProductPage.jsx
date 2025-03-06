import { useParams } from "react-router"

export const ProductPage = () => {
  const { productId } = useParams()

  return <h1>Product: {productId}</h1>
}
