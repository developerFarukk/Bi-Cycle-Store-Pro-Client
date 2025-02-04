

// import { Swiper, SwiperSlide } from 'swiper/react';


// import 'swiper/swiper-bundle.css';


// // import required modules
// import { Pagination, Navigation, Autoplay } from 'swiper/modules';


// const Slider = () => {

//     return (
//         <>
//             <Swiper
//                 slidesPerView={1}
//                 spaceBetween={30}
//                 loop={true}
//                 pagination={{
//                     clickable: true,
//                 }}
//                 autoplay={{
//                     delay: 4000,
//                     disableOnInteraction: true,
//                 }}
//                 navigation={true}
//                 modules={[Pagination, Navigation, Autoplay]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide className='items-center justify-center text-center flex h-40'>
//                     <img className='block mx-auto lg:max-h-96' src="../../../../public/Bi-1.png" alt="Bicycle1" />
//                 </SwiperSlide>
//                 <SwiperSlide className='items-center justify-center text-center flex h-40'>
//                     <img className='block mx-auto lg:max-h-96' src="../../../../public/Bi-2.png" alt="Bicycle2" />
//                 </SwiperSlide>
//                 <SwiperSlide className='items-center justify-center text-center flex h-40'>
//                     <img className='block mx-auto lg:max-h-96' src="../../../../public/Bi-3.png" alt="Bicycle3" />
//                 </SwiperSlide>
//                 <SwiperSlide className='items-center justify-center text-center flex h-40'>
//                     <img className='block mx-auto lg:max-h-96' src="../../../../public/Bi-4.png" alt="Bicycle4" />
//                 </SwiperSlide>
//                 <SwiperSlide className='items-center justify-center text-center flex h-40'>
//                     <img className='block mx-auto lg:max-h-96' src="../../../../public/offer-bicycle.jpg" alt="Bicycle5" />
//                 </SwiperSlide>
//             </Swiper>
//         </>
//     );
// };

// export default Slider;


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
                    disableOnInteraction: true, // হোভার করলে Autoplay বন্ধ হবে
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide className='items-center justify-center text-center flex h-40'>
                    <img className='block mx-auto lg:max-h-96' src="../../../../public/Bi-1.png" alt="Bicycle1" />
                </SwiperSlide>
                <SwiperSlide className='items-center justify-center text-center flex h-40'>
                    <img className='block mx-auto lg:max-h-96' src="../../../../public/Bi-2.png" alt="Bicycle2" />
                </SwiperSlide>
                <SwiperSlide className='items-center justify-center text-center flex h-40'>
                    <img className='block mx-auto lg:max-h-96' src="../../../../public/Bi-3.png" alt="Bicycle3" />
                </SwiperSlide>
                <SwiperSlide className='items-center justify-center text-center flex h-40'>
                    <img className='block mx-auto lg:max-h-96' src="../../../../public/Bi-4.png" alt="Bicycle4" />
                </SwiperSlide>
                <SwiperSlide className='items-center justify-center text-center flex h-40'>
                    <img className='block mx-auto lg:max-h-96' src="../../../../public/offer-bicycle.jpg" alt="Bicycle5" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;