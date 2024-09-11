import SectionHeader from "../../Common/SectionHeader";
import TopCategories1 from "../../../assets/images/top_categories1.png";
import TopCategories2 from "../../../assets/images/top_categories2.png";
import TopCategories3 from "../../../assets/images/top_categories3.png";
import './topcategories.scss';
import { useState } from "react";


const TopCategories = () => {

  
const [topCategoriesData, setTopCategoriesData] = useState([
  {
    id:101,
    image: TopCategories1,
    title: 'Wing Chair',
    productsCount: '3,584 Products',
  },
  {
    id:102,
    image: TopCategories2,
    title: 'Modern Chair',
    productsCount: '2,345 Products',
  },
  {
    id:103,
    image: TopCategories3,
    title: 'Luxury Sofa',
    productsCount: '1,234 Products',
  },
]); 

const handleBackward = () => {
  const topCategories = topCategoriesData.slice(1).concat(topCategoriesData[0]);
  setTopCategoriesData(topCategories);
};

const handleForward = () => {
  const topCategories =topCategoriesData.slice(-1).concat(topCategoriesData.slice(0, -1));
  setTopCategoriesData(topCategories);
};

  return (
    <div className="mt-14 max-width">
      <SectionHeader title='Top Categories'
        backward={handleBackward}
        forward={handleForward}
      />
      <div className="categories">
        {topCategoriesData.map((category) => (
          <div key={category.id} className="parent">
            <img src={category.image} alt={category.title} className="child-first"/>
            <div className="child-second">
              <h4 className="font-inter font-semibold text-[16px] leading-[22px]">{category.title}</h4>
              <p className="font-normal font-inter text-[12px] leading-[15.4px]">{category.productsCount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopCategories;