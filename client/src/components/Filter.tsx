import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Filter = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const milkTypes = [
    "Almond Milk",
    "Whole Milk",
    "Oat Milk",
    "Pea Milk",
    "Rice Milk",
    "Coconut Milk",
    "Coconut Milk",
    "Coconut Milk",
  ];
  return (
    <div>
      <div className="relative">
        <p
          onClick={() => setIsDropDown(!isDropDown)}
          className="text-[#a68e8e] cursor-pointer"
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
              className="absolute flex border-2 border-gray-500 w-40 h-40 px-2 pt-1 bg-white overflow-auto"
            >
              <div className="flex flex-col">
                {milkTypes.map((type) => (
                  <div className="flex flex-row">
                    <input
                      type="checkbox"
                      name={type}
                      id={type}
                      className="mr-2"
                    />
                    <label htmlFor={type}>{type}</label>
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
