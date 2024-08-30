import React from 'react';
import SectionHeader from "../../Common/SectionHeader";
import TopCategories1 from "../../../assets/images/top_categories1.png";
import TopCategories2 from "../../../assets/images/top_categories2.png";
import TopCategories3 from "../../../assets/images/top_categories3.png";
import './topcategories.scss';

const topCategoriesData = [
  {
    image: TopCategories1,
    title: 'Wing Chair',
    productsCount: '3,584 Products',
  },
  {
    image: TopCategories2,
    title: 'Modern Chair',
    productsCount: '2,345 Products',
  },
  {
    image: TopCategories3,
    title: 'Luxury Sofa',
    productsCount: '1,234 Products',
  },
];

const TopCategories = () => {
  return (
    <div className="mt-14 max-width">
      <SectionHeader title='Top Categories'/>
      <div className="flex flex-wrap justify-evenly">
        {topCategoriesData.map((category, index) => (
          <div key={index} className="parent">
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
