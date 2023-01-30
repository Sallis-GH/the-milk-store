import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { ProductData } from '../../../server/Interfaces';
import Filter from './Filter';

const NavBar = ({
  allProducts,
  setProductData,
}: {
  allProducts: ProductData[];
  products: ProductData[];
  setProductData: React.Dispatch<React.SetStateAction<ProductData[]>>;
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [typeFilter, setTypeFilter] = useState<string[]>([]);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
    if (!e.currentTarget.value) {
      setProductData(allProducts);
      return;
    }
    setFilters(e.currentTarget.value);
  };

  const setFilters = (input = searchValue) => {
    const filteredProducts = allProducts
      .filter((product) =>
        product.name.toLowerCase().includes(input.toLowerCase())
      )
      .filter((product) => {
        return typeFilter.length !== 0
          ? typeFilter.includes(product.type)
          : true;
      });
    setProductData(filteredProducts);
  };

  useEffect(setFilters, [typeFilter, allProducts, searchValue, setProductData]);

  return (
    <nav className='relative px-2 flex flex-col sm:flex-row justify-between sm:justify-evenly mt-4 sm:mt-8 sm:w-full'>
      <div className='flex w-64 bg-white items-center gap-1 border-2 rounded-xl px-2 py-1'>
        <MagnifyingGlassIcon className='w-[16px] h-[16px] cursor-pointer' />
        <input
          onChange={handleSearchInput}
          className='bg-transparent border-none focus:ring-0'
          type='text'
          placeholder='Search'
          value={searchValue}
        />
      </div>
      <div className='mt-2 ml-2'>
        <Filter allProducts={allProducts} setTypeFilter={setTypeFilter} />
      </div>
    </nav>
  );
};

export default NavBar;
