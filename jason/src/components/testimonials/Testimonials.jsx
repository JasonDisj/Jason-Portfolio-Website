import React from "react";
import "./testimonials.css";
import Image1 from "../../assets/John.jpeg";
// Import Swiper React components
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    image: Image1,
    title: "John Sweeney",
    subtitle: "Peer from Lighthouse Labs",
    comment:
      "I'm really happy with our final outcome, both for finals and midterms. It was really great to work with you man!",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials container section">
      <h2 className="section__title">Peers & Reviews</h2>

      <Swiper
        className="testimonials__container grid"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {reviews.map((review) => {
          return (
            <SwiperSlide className="testimonials__item">
              <div className="thumb">
                <img src={review.image} alt="" className="image" />
              </div>
              <h3 className="testimonials__title">{review.title}</h3>
              <span className="subtitle">{review.subtitle}</span>
              <div className="comment">{review.comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
