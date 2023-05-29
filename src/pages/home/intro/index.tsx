import './index.css';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import icon from '../../../assets/icons/more-used-icon.png';
import Button from '../../../components/button';

const Intro = () => {

    return (
        <div className='intro'>
            <Swiper
                modules={[Autoplay, Pagination]}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <div className="h-[80vw] md:h-[60vw] lg:h-[50vw] xl:h-[45vw] bg-cover bg-center bg-no-repeat bg-img1">
                        <div className="w-full h-full bg-black bg-opacity-20">
                            <div className='container px-[15px] mx-auto h-full relative'>
                                <div className="swiper-item__absolute sm:bottom-[4vw] sm:text-white left-[15px]">
                                    <img src={icon} alt="icon" className="mb-[10px] lg:mb-[15px] hidden sm:inline-block" />
                                    <p className="max-w-[590px] font-bold text-base sm:text-lg md:text-3xl xl:text-5xl mb-[15px] md:mb-[30px] line-clamp-2">
                                        Корпоративного питания и инженерно-технической
                                    </p>
                                    <Button type="button" title="Узнать больше" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[80vw] md:h-[60vw] lg:h-[50vw] xl:h-[45vw] bg-cover bg-center bg-no-repeat bg-img2">
                        <div className="w-full h-full bg-black bg-opacity-20">
                            <div className='container px-[15px] mx-auto h-full relative'>
                                <div className="swiper-item__absolute sm:bottom-[4vw] sm:text-white left-[15px]">
                                    <img src={icon} alt="icon" className="mb-[10px] lg:mb-[15px] hidden sm:inline-block" />
                                    <p className="max-w-[590px] font-bold text-base sm:text-lg md:text-3xl xl:text-5xl mb-[15px] md:mb-[30px] line-clamp-2">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                    <Button type="button" title="Узнать больше" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[80vw] md:h-[60vw] lg:h-[50vw] xl:h-[45vw] bg-cover bg-center bg-no-repeat bg-img3">
                        <div className="w-full h-full bg-black bg-opacity-20">
                            <div className='container px-[15px] mx-auto h-full relative'>
                                <div className="swiper-item__absolute sm:bottom-[4vw] sm:text-white left-[15px]">
                                    <img src={icon} alt="icon" className="mb-[10px] lg:mb-[15px] hidden sm:inline-block" />
                                    <p className="max-w-[590px] font-bold text-base sm:text-lg md:text-3xl xl:text-5xl mb-[15px] md:mb-[30px] line-clamp-2">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                    <Button type="button" title="Узнать больше" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[80vw] md:h-[60vw] lg:h-[50vw] xl:h-[45vw] bg-cover bg-center bg-no-repeat bg-img4">
                        <div className="w-full h-full bg-black bg-opacity-20">
                            <div className='container px-[15px] mx-auto h-full relative'>
                                <div className="swiper-item__absolute sm:bottom-[4vw] sm:text-white left-[15px]">
                                    <img src={icon} alt="icon" className="mb-[10px] lg:mb-[15px] hidden sm:inline-block" />
                                    <p className="max-w-[590px] font-bold text-base sm:text-lg md:text-3xl xl:text-5xl mb-[15px] md:mb-[30px] line-clamp-2">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing.
                                    </p>
                                    <Button type="button" title="Узнать больше" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Intro;