import { useState } from 'react';

const SlideBar = ({ currentValue, setCurrentValue, storage }: { currentValue:number, setCurrentValue:Function, storage: number }) => {
  

  return (
    <div className='flex flex-col gap-6 pt-2'>
      <input
        id='default-range'
        type='range'
        defaultValue={currentValue}
        min='1'
        max={storage}
        className='w-full bg-black/30 h-2 rounded-lg appearance-none cursor-pointer'

        onChange={(e) => setCurrentValue(Number(e.target.value))}
      />
      <h4>{currentValue} liter</h4>
    </div>
  );
};

export default SlideBar;
