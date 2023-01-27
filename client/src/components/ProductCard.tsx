import MilkImage from '../assets/images/milk.png';
import LoadingProductCard from './LoadingProductCard';

const ProductCard = ({
  id,
  name,
  type,
  storage,
}: {
  id: string;
  name: string;
  type: string;
  storage: number;
}) => {
  return (
    <div
      key={id}
      className='bg-white rounded-lg w-[280px] h-[344px]  md:w-[200px] md:h-[288px] lg:h-[324px] lg:w-[260px]'
    >
      <img
        className='bg-gray-100 p-6 rounded-t-lg w-[280px] h-[280px] md:w-[200px] md:h-[200px] lg:w-[260px] lg:h-[260px]'
        src={MilkImage}
        alt='Milk Illustration'
      />
      <div className='p-2 flex flex-col'>
        <p className='truncate'>{name}</p>
        <div className='px-5 md:pr-2 md:pl-0 flex w-full justify-between'>
          <p>{type}</p>
          <p>{storage}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
