
import offerpic from "/public/offer-bicycle.jpg";
import pic1 from "/public/Bi-1.png";
import pic2 from "/public/Bi-2.png";
import pic3 from "/public/Bi-3.png";
import pic4 from "/public/Bi-4.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Slider = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide className='items-center justify-center text-center flex h-40'>
                    <img className='block mx-auto lg:max-h-96 rounded-md' src={offerpic} alt="Bicycle5" />
                </SwiperSlide>
                <SwiperSlide className='items-center justify-center text-center flex h-40'>
                    <img className='block mx-auto lg:max-h-96' src={pic1} alt="Bicycle1" />
                </SwiperSlide>
                <SwiperSlide className='items-center justify-center text-center flex h-40'>
                    <img className='block mx-auto lg:max-h-96' src={pic2} alt="Bicycle2" />
                </SwiperSlide>
                <SwiperSlide className='items-center justify-center text-center flex h-40'>
                    <img className='block mx-auto lg:max-h-96' src={pic3} alt="Bicycle3" />
                </SwiperSlide>
                <SwiperSlide className='items-center justify-center text-center flex h-40'>
                    <img className='block mx-auto lg:max-h-96' src={pic4} alt="Bicycle4" />
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Slider;