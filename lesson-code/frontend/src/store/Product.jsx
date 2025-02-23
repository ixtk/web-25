export const Product = ({
  title,
  imageUrl,
  price,
  id,
  productList,
  setProductList,
}) => {
  const deleteProduct = async () => {
    // "http://localhost:3333/products/" + id

    const response = await fetch(`http://localhost:3333/products/${id}`, {
      method: "delete",
    });

    console.log("Product with id", id, "deleted");

    setProductList(productList.filter((pr) => {
      if (pr.id === id) {
        return false
      } else {
        return true
      }

      // return pr.id !== id
    }))
  };

  return (
    <div className="product">
      <img src={imageUrl} alt="" />
      <h2>{title}</h2>
      <p>${price}</p>
      <button onClick={deleteProduct}>Delete</button>
    </div>
  );
};
