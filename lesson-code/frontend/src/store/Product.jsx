export const Product = ({ title, imageUrl, price, id, productList, setProductList }) => {
  const deleteProduct = async () => {
    const response = await fetch("http://localhost:3000/products/" + id, {
      method: "delete"
    })

    // update state...
    // remove product with the id

    setProductList(productList.filter((pr) => {
      return pr.id !== id
    }))
  }

  return (
    <div className="product">
      <img src={imageUrl} alt="" />
      <h2>{title}</h2>
      <p>${price}</p>
      <button onClick={deleteProduct}>Delete</button>
    </div>
  )
}
