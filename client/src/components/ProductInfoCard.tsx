import MilkImage from '../assets/images/milk.png';
import SlideBar from './SlideBar';

const ProductInfoCard = ({
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
    <div className='flex flex-col md:flex-row md:gap-20 md:justify-center'>
      <img
        className='bg-gray-100 p-6 rounded-t-lg w-64 md:w-[200px] md:h-[200px] lg:w-[260px] lg:h-[260px]'
        src={MilkImage}
        alt='Milk Illustration'
      />
      <div className='flex flex-col gap-1'>
        <h1>{name}</h1>
        <div className='flex justify-between'>
          <h2 className='text-[#b8a0a0]'>{type}</h2>
          <h3 className='text-[#e8be1e]'>{storage} liter</h3>
        </div>
        <div className='mt-3'>
        <SlideBar storage={storage} />
        </div>
        <div className='flex h-full items-end'>
          <button className='h-8 bg-gray-100 cursor-pointer py-1 px-8 rounded-lg hover:bg-gray-50 active:scale-95 transition ease duration-[50ms]'>
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoCard;
