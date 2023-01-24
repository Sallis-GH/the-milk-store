import MilkImage from "../assets/images/milk.png";

const ProductCard = ({ products }: { products: string[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 overflow-x-auto h-[75vh] px-2">
      {products.map((product) => (
        <div className="bg-white rounded-lg w-[280px] md:w-[200px] lg:w-[260px]">
          <img
            className="bg-gray-400 p-6 rounded-t-lg"
            src={MilkImage}
            alt="Milk Illustration"
          />
          <div className="p-2">
            <p>{product}</p>
            <div className="flex justify-between">
              <p>{product}</p>
              <p>{product}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
