export const Product = ({ title, imageUrl, price }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt="" />
      <h2>{title}</h2>
      <p>${price}</p>
    </div>
  )
}
