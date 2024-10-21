const Product = ({ image, name, price }) => {
  return (
    <li>
      <div className="max-w-full max-h-full overflow-hidden border border-neutral-300 bg-neutral-100">
        <img
          src={image}
          alt={name}
          className="object-contain w-full max-h-72"
        />
      </div>
      <h1>{name}</h1>
      <p>{price}</p>
    </li>
  );
};
export default Product;
