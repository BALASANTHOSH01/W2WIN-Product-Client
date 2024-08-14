import Image from 'next/image';
import HeroBG from '@/assets/Hero/HeroBG.jpg'; // Update the path accordingly

const HeroSection = () => {
  return (
    <div className='relative h-screen'>
      <Image
        src={HeroBG}
        alt='HeroImg'
        layout='fill'
        objectFit='cover'
        className='z-0'
      />
      <div className='absolute inset-0 flex flex-col justify-center items-start p-10 z-10'>
        <h1 className='text-6xl font-bold text-white mb-4'>
          We2WinFurniture
        </h1>
        <p className='text-2xl text-white mb-8'>
          You Buy a Home,<br/>We Make that House
        </p>
        <button className='px-6 py-3 bg-white text-black font-semibold rounded-md'>
          Shop Furniture
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
