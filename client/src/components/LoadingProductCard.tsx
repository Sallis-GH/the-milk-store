const LoadingProductCard = () => {
  return (
    <div className='bg-white rounded-lg w-[280px] md:w-[200px] md:h-[288px] lg:w-[260px] lg:h-[324px] h-[344px] overflow-hidden'>
      <div className='h-[260px] md:h-[200px] lg:h-[260px] w-full bg-red-200 animate-pulse'></div>
      <div className='pt-5 px-3 md:p-2 lg:p-0 lg:px-3'>
        <div className='flex flex-col gap-4 md:gap-7 md:pt-2 lg:gap-4 h-full '>
          <div className='bg-red-200 w-full animate-pulse h-4 rounded-2xl'></div>
          <div className='flex justify-between'>
            <div className='bg-red-200 w-20 animate-pulse h-4 rounded-2xl'></div>
            <div className='bg-red-200 w-10 animate-pulse h-4 rounded-2xl'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingProductCard;
