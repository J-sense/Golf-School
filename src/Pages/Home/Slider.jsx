import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import img1 from "../../assets/slider/sharing-with-golf-experience--e1633343125741.jpg"
import img2 from "../../assets/slider/women-in-caps-with-golf-equipment-having-conversation-at-golf-course-e1633343102588.jpg"
import img3 from "../../assets/slider/young-friends-playing-golf-together-on-green-at-daytime-e1633343065791 (1).jpg"

const Slider = () => {
    return (
        <div className="max-w-screen-xl mx-auto gap-2">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="card bg-base-100 shadow-xl sm:flex sm:items-center">
                        <figure className="sm:w-1/2 sm:order-2">
                            <img src={img2} alt="Shoes" className="w-full" />
                        </figure>
                        <div className="card-body sm:w-1/2 sm:order-1">
                            <h2 className="card-title text-2xl sm:text-3xl">Shoes!</h2>
                            <p className="text-base sm:text-lg">If a dog chews shoes, whose shoes does he choose?</p>
                            <div className="card-actions justify-end mt-4 sm:mt-6">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>


                </SwiperSlide>
                <SwiperSlide>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure><img src={img2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className="card  bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div></SwiperSlide>
              
            </Swiper>
        </div>
    );
};

export default Slider;