import SectionHeader from "../../Common/SectionHeader";
import Client1 from '../../../assets/images/client1.png';
import Client2 from '../../../assets/images/client2.png';
import DoubleQuotes from '../../../assets/svg/double_quotes.svg';
import SimpleSlider from "../../Common/Slider"; 
import { useState, useRef } from "react";

const Testimonials = () => {
  const sliderRef = useRef(null);
  
  const [testimonialsData] = useState([
    {
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem.",
      clientImage: Client1,
      clientName: "Kristin Watson",
      clientTitle: "Fashion Designer",
    },
    {
      description: "Nullam sapien elit, dignissim eu viverra et, scelerisque et felis. Aliquam egestas dui elit, quis tincidunt lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem.",
      clientImage: Client2,
      clientName: "Esther Howard",
      clientTitle: "Fashion Designer",
    },
  ]);

  const sliderSettings = {
    slidesToShow: 2,  
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,  
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mt-20 bg-secondary-white" id="pages">
      <div className="max-width">
        <SectionHeader title="What client says about us" sliderRef={sliderRef} />

        <SimpleSlider sliderRef={sliderRef} showSlides={2} sliderSettings={sliderSettings}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white shadow-custom rounded-xl">
              <div>
                <p className="pl-4 border-l-2 border-[#029FAE] font-normal text-xl text-[#636270]">
                  {testimonial.description}
                </p>
              </div>
              <div className="flex items-center mt-4">
                <div className="flex items-center">
                  <img
                    src={testimonial.clientImage}
                    alt={testimonial.clientName}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-blue">
                      {testimonial.clientName}
                    </h4>
                    <p className="text-[#9A9CAA] text-base">
                      {testimonial.clientTitle}
                    </p>
                  </div>
                </div>
                <div className="ml-auto">
                  <img src={DoubleQuotes} alt="double-quotes" />
                </div>
              </div>
            </div>
          ))}
        </SimpleSlider>
      </div>
    </div>
  );
};

export default Testimonials;
