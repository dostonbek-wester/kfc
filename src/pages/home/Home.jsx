import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from "./swipimg.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"
import img4 from "./img4.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import "./home.css"
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
const home = () => {
  return (
    <div className='swip-block'>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true }
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
     
      
      >
        <SwiperSlide><img src={img1} alt="Loading..." /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="Loading..." /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="Loading..." /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="Loading..." /></SwiperSlide>
 
        
      </Swiper>
      
    </div>
  );
}


export default home