import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './testimonial.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function BlockchainClient() {
  return (
    <div className='testimonial'>
    <h1>
            How Client says about Us?
            <div className="title__separete"></div>
          </h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide>
          
          <figure className="clients">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg" alt="profile-sample3" className="profile" />
            <figcaption>
              <h2>Sarah Johnson</h2>
              <h4>CTO of XYZ Corporation</h4>
              <blockquote> "Blockchain technology has revolutionized the way we handle transactions, providing security and transparency like never before."</blockquote>
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="clients hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="profile-sample5" className="profile" />
            <figcaption>
              <h2>Gordon Norman</h2>
              <h4>Accountant</h4>
              <blockquote> "Blockchain technology has revolutionized the way we handle transactions, providing security and transparency like never before."</blockquote>
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="clients"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg" alt="profile-sample6" className="profile" />
            <figcaption>
              <h2>Sue Shei</h2>
              <h4>Public Relations</h4>
              <blockquote> "Blockchain technology has revolutionized the way we handle transactions, providing security and transparency like never before."</blockquote>
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="clients">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg" alt="profile-sample3" className="profile" />
            <figcaption>
              <h2>Eleanor Crisp</h2>
              <h4>UX Design</h4>
              <blockquote> "Blockchain technology has revolutionized the way we handle transactions, providing security and transparency like never before."</blockquote>
            </figcaption>
          </figure>
        </SwiperSlide>
      
      </Swiper>
    </div>
  );
}

