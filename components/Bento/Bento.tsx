'use client';

import Image from 'next/image';
import Link from 'next/link';

const Bento: React.FC = () => {
    return (
        <div className="py-12 px-6">
            <div className="flex flex-row gap-2">

                <div className='flex flex-col w-[60%] p-3'>

                    {/* First Item */}
                    <div className="col-span-2 bg-white p-6 rounded-lg shadow-lg relative">
                        <div className="absolute top-4 left-4 bg-blue-100 text-blue-700 px-2 py-1 rounded-md">
                            NEW COLLECTION
                        </div>
                        <div className="flex items-center justify-center">
                            <Image
                                src="/path-to-your-image/center-table.jpg"
                                alt="Center Table"
                                width={100}
                                height={100}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold mb-2">Center Table</h3>
                            <p className="text-gray-700 mb-4">Square table, Round table, Wooden table, Glass table</p>
                            <Link href="/products/center-table" legacyBehavior>
                                <a className="text-blue-500 hover:underline flex items-center">
                                    View All <span className="ml-1">&rarr;</span>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className=' grid grid-cols-2 p-2 gap-3'>

                        {/* Second Item */}
                        <div className="col-span-1 bg-white p-6 rounded-lg shadow-lg relative">
                            <div className="absolute top-4 left-4 bg-green-100 text-green-700 px-2 py-1 rounded-md">
                                NEW COLLECTION
                            </div>
                            <div className="flex items-center justify-center">
                                <Image
                                    src="/path-to-your-image/lighting-lamp.jpg"
                                    alt="Lighting Lamp"
                                    width={100}
                                    height={100}
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-semibold mb-2">Lighting Lamp</h3>
                                <p className="text-gray-700 mb-4">Floor lamps, Tripod lamps, Table lamps, Study lamps</p>
                                <Link href="/products/lighting-lamp" legacyBehavior>
                                    <a className="text-green-500 hover:underline flex items-center">
                                        View All <span className="ml-1">&rarr;</span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        {/* Third Item - Discount */}
                        <div className="col-span-1 bg-yellow-500 text-white p-6 rounded-lg shadow-lg flex items-center justify-center">
                            <div className="text-center">
                                <h3 className="text-2xl font-semibold mb-2">GET DISCOUNT</h3>
                                <p className="text-4xl font-bold">20% OFFER</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Fourth Item */}
                <div className="col-span-2 bg-white p-6 rounded-lg shadow-lg relative w-[40%] p-3">
                    <div className="absolute top-4 left-4 bg-red-100 text-red-700 px-2 py-1 rounded-md">
                        NEW COLLECTION
                    </div>
                    <div className="flex items-center justify-center">
                        <Image
                            src="/path-to-your-image/accent-chairs.jpg"
                            alt="Accent Chairs"
                            width={100}
                            height={100}
                            className="rounded-lg"
                        />
                    </div>
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold mb-2">Accent Chairs</h3>
                        <p className="text-gray-700 mb-4">Arm chair, Wing chair, Café chair, Wheelchairs</p>
                        <Link href="/products/accent-chairs" legacyBehavior>
                            <a className="text-red-500 hover:underline flex items-center">
                                View All <span className="ml-1">&rarr;</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bento;
