import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../assets/female-golf-player-in-cap-and-golf-glove-putting-ball-on-green-lawn-at-golf-course.jpg'
import banner2 from '../../assets/young-friends-playing-golf-together-on-green-at-daytime-e1633343065791.jpg'
import banner3 from '../../assets/golf-1.jpg'
const Banner = () => {
    return (
        <div className='bg-[#DBE8E7] flex justify-between'>
            {/* <div className='flex flex-col w-1/2'>
                <h1 className=' text-[#6f948d] text-[28px] lg:text-[75px]'>
                    Online
                </h1>
                <h3 className='text-[#404b48]  font-bold md:text-[85px]'>
                    Yoga Classes
                </h3>
                <p className=' text-[16px] md:text-[21px] text-[#6f948d] '>
                    Yoka is the most popular yoga classes trusted by 10000+ peoples. Our instructor are well none and certified
                </p>
                <button className='btn btn-info'> View Classes </button>
            </div>
            <div className='w-1/2'>
            <img className='lg:w-[1000px] w-[700px] text-end' src={banner} alt="" />

            </div> */}
            <Carousel>
                <div>

                    <div class="relative">
                        <img src={banner1} alt="Banner Image" class="object-cover max-h-screen  w-full" />
                            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                            <div class="absolute inset-0 flex gap-2  flex-col items-center justify-center">
                                <h1 class="text-white md:text-xl font-bold te">WELCOME TO GREENSIDE</h1>
                                <h1 className='md:text-5xl text-2xl  md:w-1/2 text-white'>The favourite colour of golfers is green.</h1>
                                <button className='btn bg-[#3AA62B] border-0 text-white px-5 mt-3 py-3'>Book now</button>
                            </div>
                    </div>



                </div>
                <div>
                <div class="relative">
                        <img src={banner2} alt="Banner Image" class="object-cover max-h-screen  w-full" />
                            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                            <div class="absolute inset-0 flex gap-2  flex-col items-center justify-center">
                                <h1 class="text-white md:text-xl font-bold te">WELCOME TO GREENSIDE</h1>
                                <h1 className='md:text-5xl text-2xl  md:w-1/2 text-white'>The favourite colour of golfers is green.</h1>
                                <button className='btn bg-[#3AA62B] border-0 text-white px-5 mt-3 py-3'>Book now</button>
                            </div>
                    </div>
                </div>
                <div>
                <div class="relative">
                        <img src={banner3} alt="Banner Image" class="object-cover max-h-screen   w-full" />
                            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                            <div class="absolute inset-0 flex gap-2  flex-col items-center justify-center">
                                <h1 class="text-white md:text-xl font-bold te">WELCOME TO GREENSIDE</h1>
                                <h1 className='md:text-5xl text-2xl  md:w-1/2 text-white'>The favourite colour of golfers is green.</h1>
                                <button className='btn bg-[#3AA62B] border-0 text-white px-5 mt-3 py-3'>Book now</button>
                            </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;