import SectionHeader from "../../../Common/SectionHeader";
import Client1 from '@/assets/images/client1.png';
import Client2 from '../../../assets/images/client2.png';
import DoubleQuotes from '../../../assets/svg/double_quotes.svg?react';
import SimpleSlider from "../../../Common/Slider"; 
import { useState, useRef } from "react";

interface TestimonialsData {
  description: string;
  clientImage: string;
  clientName: string;
  clientTitle: string;
}

const Testimonials: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  
  const [testimonialsData] = useState<TestimonialsData[]>([
    {
      description: "I recently purchased a sectional sofa from Comforty, and I couldn't be happier! The design is sleek, the fabric is incredibly soft, and the level of comfort is unmatched. It's the perfect addition to my living room. The delivery was smooth, and the customer service team was very responsive. Highly recommend Comforty for anyone looking to upgrade their home furniture!",
      clientImage: Client1,
      clientName: "Kristin Watson",
      clientTitle: "Fashion Designer",
    },
    {
      description: "Comforty has completely transformed my home! I bought a dining table set, and not only is it beautifully crafted, but it's also extremely durable. The attention to detail and quality of materials is obvious. Plus, the team made the whole process so easy, from order to delivery. If you're looking for furniture that combines style and comfort, Comforty is the place to go!",
      clientImage: Client2,
      clientName: "Esther Howard",
      clientTitle: "Fashion Designer",
    },
  ]);

  const sliderSettings: Record<string, unknown> = {
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
