import { Link } from 'react-router-dom';
import { ProductData } from '../../../server/Interfaces';
import ProductCard from './ProductCard';

const Product = ({ products }: { products: ProductData[] }) => {
  return (
    <>
      <div className='flex flex-col p-3'>
        {products.length !== 0 && <p>{products.length} products</p>}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 overflow-x-auto h-[75vh] pr-3 scrollbar-thin scrollbar-thumb-[#e5d8d7] scrollbar-thumb-rounded'>
          {products.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <ProductCard
                id={product.id}
                name={product.name}
                type={product.type}
                storage={product.storage}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
