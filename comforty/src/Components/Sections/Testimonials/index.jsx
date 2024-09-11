import SectionHeader from "../../Common/SectionHeader";
import Client1 from '../../../assets/images/client1.png';
import Client2 from '../../../assets/images/client2.png';
import DoubleQuotes from '../../../assets/svg/double_quotes.svg';
import { useState } from "react";



const Testimonials = () => {

  const [testimonialsData, setTestimonialsData] = useState([
    {
      description: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“",
      clientImage: Client1,
      clientName: "Kristin Watson",
      clientTitle: "Fashion Designer",
    },
    {
      description: "Nullam sapien elit, dignissim eu viverra et, scelerisque et felis. Aliquam egestas dui elit, quis tincidunt lacus aliquam et. Duis nulla velit, dignissim ut odio ac, eleifend luctus leo. Ut ac imperdiet velit. Aliquam semper ex in volutpat rutrum.",
      clientImage: Client2,
      clientName: "Esther Howard",
      clientTitle: "Fashion Designer",
    },
  ]);

  const handleBackward = () => {
    const testimonials = testimonialsData.slice(1).concat(testimonialsData[0]);
    setTestimonialsData(testimonials);
  };

  const handleForward = () => {
    const testimonials =testimonialsData.slice(-1).concat(testimonialsData.slice(0, -1));
    setTestimonialsData(testimonials);
  };

  return (
    <div className="py-10 mt-20 bg-secondary-white" id="pages">
      <div className="max-width">
        <SectionHeader title="What client says about us"
        backward={handleBackward}
        forward={handleForward}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white shadow-custom rounded-xl">
              <div>
                <p className="pl-4 border-l-2 border-[#029FAE] font-normal text-xl text-[#636270]">{testimonial.description}</p>
              </div>
              <div className="flex items-center mt-4">
                <div className="flex items-center">
                  <img
                    src={testimonial.clientImage}
                    alt={testimonial.clientName}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-blue">{testimonial.clientName}</h4>
                    <p className="text-[#9A9CAA] text-base">{testimonial.clientTitle}</p>
                  </div>
                </div>
                <div className="ml-auto">
                  <img src={DoubleQuotes} alt="double-quotes" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
