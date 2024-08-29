import SectionHeader from "../SectionHeader";
import Client1 from '../../assets/images/client1.png';
import Client2 from '../../assets/images/client2.png';
import DoubleQuotes from '../../assets/svg/double_quotes.svg?react';

const testimonialsData = [
  {
    description: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“",
    clientImage: Client1,
    clientName: "Kristin Watson",
    clientTitle: "Fashion Designer",
  },
  {
    description: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“",
    clientImage: Client2,
    clientName: "John Doe",
    clientTitle: "Graphic Designer",
  },
];

const Testimonials = () => {
  return (
    <div className="mt-10 bg-secondary-white">
      <div className="max-width">
        <SectionHeader title="What client says about us" className="my-10" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <div>
                <p className="pl-4 border-l-2 border-[#029FAE]">{testimonial.description}</p>
              </div>
              <div className="flex items-center mt-4">
                <div className="flex items-center">
                  <img
                    src={testimonial.clientImage}
                    alt={testimonial.clientName}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="font-bold">{testimonial.clientName}</h4>
                    <p className="text-gray-500">{testimonial.clientTitle}</p>
                  </div>
                </div>
                <div className="ml-auto">
                  <DoubleQuotes />
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
