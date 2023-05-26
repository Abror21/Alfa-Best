import { useState } from "react";
import img from '../../../assets/images/history-img.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import './index.css';

import { Autoplay, Navigation, Thumbs } from "swiper";
import DefaultText from "../../../components/default-text";
import DefaultTitle from "../../../components/default-title";
// import SliderItem from "./slider-item";

const slides = [
  { id: 1, year: 2019 },
  { id: 2, year: 2020 },
  { id: 3, year: 2021 },
  { id: 4, year: 2022 },
  { id: 5, year: 2023 },
]

const History = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className="container mx-auto px-[15px] mt-10 md:mt-[60px]">
        <div>
          <Swiper
            style={{
              marginBottom: '20px'
            }}
            // autoplay={{
            //   delay: 5000,
            //   disableOnInteraction: false,
            // }}
            loop={true}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[Autoplay, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {
              slides.map(slide => (
                <SwiperSlide>
                  <div className="flex flex-col items-center md:block">
                    <DefaultTitle
                      title="История"
                    />
                  </div>
                  <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-7 md:gap-8">
                    <div className="max-h-80 md:col-span-2">
                      <img className="mx-auto md:mx-0 md:w-auto h-full object-cover" src={img} alt="image" />
                    </div>
                    <div className="md:col-span-2 lg:col-span-3 text-center md:text-left">
                      <h4 className="text-[#1B2330] text-xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mb-5">{slide.year}</h4>
                      <DefaultText
                        text={
                          <>
                            начало осуществления деятельности корпоративного питания и инженерно-технической эксплуатации <br /><br />
                            По требованиям контролирующих инстанций, техобслуживание зданий начинается с момента введения объекта в эксплуатации. В качестве управляющей компании может выступать любая организация, имеющая лицензию и соответствующие возможности для проведения измерительных, ремонтных работ.
                          </>
                        }
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }

          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            modules={[Navigation, Thumbs]}
            className="mySwiper"
          >
            {
              slides.map(slide => (
                <SwiperSlide>
                  <button className="text-xl sm:text-3xl md:text-4xl xl:text-5xl">
                    {slide.year}
                  </button>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div >
    </>
  )
}

export default History