import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ProductData } from '../../../server/Interfaces';
import { FilterCheck } from '../../../server/Interfaces';
import Checkbox from './Checkbox';

const Filter = ({
  allProducts,
  setTypeFilter,
}: {
  allProducts: ProductData[];
  setTypeFilter: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [milkTypes, setMilkTypes] = useState<FilterCheck[]>([]);

  const getMilkTypes = () => {
    const milkTypes: FilterCheck[] = [];
    allProducts.forEach((product) => {
      if (!milkTypes.some((milk) => product.type === milk.type)) {
        milkTypes.push({ type: product.type, isChecked: false });
      }

      setMilkTypes(milkTypes);
    });
  };
  const setFilter = (e?: React.ChangeEvent<HTMLInputElement>) => {
    if (!e) {
      return;
    }
    milkTypes.forEach((milk) =>
      e.currentTarget.name === milk.type
        ? (milk.isChecked = !milk.isChecked)
        : null
    );
    const typesToFilter = milkTypes
      .filter((type) => type.isChecked)
      .map((filteredTypes) => filteredTypes.type);
    setTypeFilter(typesToFilter);
  };

  useEffect(getMilkTypes, [allProducts]);
  return (
    <div>
      <div className='relative'>
        <p
          onClick={() => setIsDropDown(!isDropDown)}
          className='text-[#a68e8e] cursor-pointer'
        >
          Filter
        </p>
        <AnimatePresence>
          {isDropDown && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
              exit={{ opacity: 0 }}
              className='absolute flex border-2 border-gray-500 pr-4 pl-2 pt-1 bg-white overflow-auto w-max h-52'
            >
              <div className='flex flex-col'>
                {milkTypes.map((milk, i: number) => (
                  <div key={i} className='flex flex-row'>
                    <Checkbox
                      setFilter={setFilter}
                      isChecked={milk.isChecked}
                      name={milk.type}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Filter;
