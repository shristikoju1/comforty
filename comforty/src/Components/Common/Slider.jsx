import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider({ children, sliderRef,showSlides = 4 }) {
  const defaultSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: showSlides,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows:false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Merge defaultSettings with custom settings
  const sliderSettings = { ...defaultSettings};
  
  return (
    <Slider {...sliderSettings} ref={sliderRef}>
      {children}
    </Slider>
  );
}
