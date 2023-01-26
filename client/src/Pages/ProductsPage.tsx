import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductData } from '../../../server/Interfaces';
import Header from '../components/Header';
import ProductInfoCard from '../components/ProductInfoCard';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

const ProductsPage = () => {
  let { id } = useParams();
  const [product, setProduct] = useState<ProductData>({} as ProductData);
  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((data) => data.json())
      .then((products) => {
        const { _id, id, name, type, storage }: ProductData = products[0];
        setProduct({ _id, id, name, type, storage });
      });
  }, [id]);

  return (
    <>
      <Header />
      <main>
        <section className='flex flex-col items-center pt-6 md:pt-0 md:h-[calc(100vh-100px)] justify-center'>
          <div>
            <Link to='/'>
              <div className='flex items-center mb-5 ml-[-1rem] cursor-pointer'>
                <ChevronLeftIcon className='h-4' />
                <h2 className='text-xs font-semibold uppercase tracking-wide pb-[2px]'>
                  Back
                </h2>
              </div>
            </Link>
            <ProductInfoCard
              id={product.id}
              name={product.name}
              type={product.type}
              storage={product.storage}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductsPage;
