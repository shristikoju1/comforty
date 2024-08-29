import DiscountIcon from '../../assets/svg/feature1.svg?react';
import DeliveryIcon from '../../assets/svg/feature2.svg?react';
import TimeIcon from '../../assets/svg/feature3.svg?react';
import ShieldIcon from '../../assets/svg/feature4.svg?react';

import './styles.scss';

const featuresData = [
  {
    icon: DiscountIcon,
    title: 'Discount',
    description: 'Every week new sales',
  },
  {
    icon: DeliveryIcon,
    title: 'Free Delivery',
    description: '100% Free for all orders',
  },
  {
    icon: TimeIcon,
    title: 'Great Support 24/7',
    description: 'We care your experiences',
  },
  {
    icon: ShieldIcon,
    title: 'Secure Payment',
    description: '100% Secure Payment Method',
  },
];

const Feature = () => {
  return (
    <div className="mx-auto max-width">
      <div className="feature-container flex items-center justify-center gap-2 space-x-5 px-3 py-[50px] border-2 border-gray-300 border-solid rounded-xl h-[150px]">
        {featuresData.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <feature.icon className="feature-icon" />
            <div>
              <h4 className="text-base font-medium">{feature.title}</h4>
              <p className="text-xs gray-600 ">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
