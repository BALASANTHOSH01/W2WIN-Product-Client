import Image from 'next/image';
import Furniture from '@/assets/ProductList/TableImg.jpg';

const About = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-purple-200 py-12">
      <div className="container mx-auto px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col md:flex-col items-center mb-8">
          <div className="w-full lg:w-2/3 lg:mx-auto mb-8 lg:mb-0">
            <Image 
              src={Furniture}
              alt="Furniture Showroom"
              width={600}
              height={400}
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="w-full  bg-white p-6 lg:my-[2%] lg:mt-[5%] lg:p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Welcome to our furniture company located in the heart of Coimbatore. We specialize in providing high-quality furniture that blends style with comfort. Our showroom is located at:
            </p>
            <p className="text-gray-600 mb-2 font-semibold">
              6th St, Vinayagapuram, Coimbatore, Tamil Nadu 641035
            </p>
            <p className="text-gray-600 mb-4">
              Feel free to reach out to us at:
            </p>
            <ul className="text-gray-600 mb-4 list-disc list-inside">
              <li>Phone number: 9659608491</li>
              <li>Phone number: 99528 39684</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to provide exceptional furniture solutions that cater to the diverse needs of our clients. Visit us and explore our extensive collection of premium furniture.
            </p>
          </div>
        </div>
        <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=6th%20St,%20Vinayagapuram,%20Coimbatore,%20Tamil%20Nadu%20641035&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default About;
