import React, { useEffect, useState } from 'react';
import { ProductData } from '../../../server/Interfaces';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Product from '../components/Product';

const Home = () => {
  const [allProducts, setAllProducts] = useState<ProductData[]>([]);
  const [productData, setProductData] = useState<ProductData[]>([]);

  useEffect(() => {
    fetch('/api/products')
      .then((data) => data.json())
      .then((products) => {
        setProductData(products);
        setAllProducts(products);
      });
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className='flex justify-center'>
          <NavBar
            products={productData}
            allProducts={allProducts}
            setProductData={setProductData}
          />
        </section>
        <section className='flex justify-center'>
          <Product products={productData} />
        </section>
      </main>
    </>
  );
};

export default Home;
