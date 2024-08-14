import Image from 'next/image';
import Image1 from "@/assets/Hero/Table.jpg";

const PopularProduct = () => {
  return (
    <div className='py-[3%] px-[3%]'>

<div className=' my-[2%] '>
      <h1 className='text-[46px] font-bold '>Popular Products</h1>
      <p className='text-lg text-gray-500'>Shapes are not made we make it!</p>
</div>

      <div className='grid grid-cols-3 md:grid-cols-1  gap-4'>
        {[1, 2, 3,4,5,6].map((_, index) => (
          <div 
            key={index}
            className='relative bg-cover bg-center h-[300px] cursor-pointer hover:shadow-2xl'
            style={{ backgroundImage: `url(${Image1.src})` }}
          >
            <div className='absolute bg-black opacity-50 w-full h-full top-0 left-0 z-0'></div>
            <div className='absolute bottom-0 left-0 z-10 p-4'>
              <p className='font-bold text-4xl text-white'>Outdoor Chair</p>
              <p className='text-gray-400 font-semibold'>We2WinFurniture</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProduct;
