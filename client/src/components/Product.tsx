import ProductCard from "./ProductCard";

const Product = () => {
  const products = ["Milk", "Milk", "Milk", "Milk", "Milk", "Milk"];
  return (
    <>
      <div className="flex flex-col p-3">
        <p >{products.length} products</p>
        <ProductCard products={products}/>
      </div>
    </>
  );
};

export default Product;
