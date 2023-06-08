import React from 'react';
import img1 from "../../../assets/slider/sharing-with-golf-experience--e1633343125741.jpg"
import img2 from "../../../assets/slider/women-in-caps-with-golf-equipment-having-conversation-at-golf-course-e1633343102588.jpg"
import img3 from "../../../assets/slider/young-friends-playing-golf-together-on-green-at-daytime-e1633343065791 (1).jpg"

const Extra = () => {
    return (
        <div className=' bg-[#DBE8E7] '>
            <h1 className='md:text-5xl text-2xl text-center from-neutral-600 font-serif font-bold pb-10'>
            Play cool, play golf

            </h1>

            <div className='grid md:grid-cols-3 max-w-screen-xl mx-auto md:gap-0 gap-5'>
           

                <div className="card bg-base-100 shadow-xl max-w-sm mx-auto overflow-hidden">
                    <div className="relative">
                        <img src={img2} alt="Card Image" className="w-full hover:scale-105 transition-transform duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-75 bg-gray-900 text-white opacity-0 transition-opacity duration-300">
                            <p className="text-lg font-semibold">Additional Text</p>
                        </div>
                    </div>
                    <div className="card-body flex flex-col justify-center items-center">
                        <h2 className="card-title">Golf For Team</h2>
                        <p className="card-text">Molestie ac enim lacinia commodo euismod nibh torquent risus vivamus adipiscing scelerisque</p>
                        <button className='btn px-4 py-2 bg-[#3AA62B] text-white hover:bg-green-600'>
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl max-w-sm mx-auto overflow-hidden">
                    <div className="relative">
                        <img src={img2} alt="Card Image" className="rounded-none w-full hover:scale-105 transition-transform duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-75 bg-gray-900 text-white opacity-0 transition-opacity duration-300">
                            <p className="text-lg font-semibold">Additional Text</p>
                        </div>
                    </div>
                    <div className="card-body flex flex-col justify-center items-center rounded-none">
                        <h2 className="card-title">Golf For Team</h2>
                        <p className="card-text">Molestie ac enim lacinia commodo euismod nibh torquent risus vivamus adipiscing scelerisque</p>
                        <button className='btn px-4 py-2 bg-[#3AA62B] text-white hover:bg-green-600'>
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl max-w-sm mx-auto overflow-hidden">
                    <div className="relative">
                        <img src={img2} alt="Card Image" className="w-full hover:scale-105 transition-transform duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-75 bg-gray-900 text-white opacity-0 transition-opacity duration-300">
                            <p className="text-lg font-semibold">Additional Text</p>
                        </div>
                    </div>
                    <div className="card-body flex flex-col justify-center items-center">
                        <h2 className="card-title">Golf For Team</h2>
                        <p className="card-text">Molestie ac enim lacinia commodo euismod nibh torquent risus vivamus adipiscing scelerisque</p>
                        <button className='btn px-4 py-2 bg-[#3AA62B] text-white hover:bg-green-600'>
                            Learn More
                        </button>
                    </div>
                </div>


            </div>
        </div>

    );
};

export default Extra;