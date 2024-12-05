import SectionHeader from "@/Common/SectionHeader";
import TopCategories1 from "@/assets/images/top_categories1.png";
import TopCategories2 from "@/assets/images/top_categories2.png";
import TopCategories3 from "@/assets/images/top_categories3.png";
import "@/styles/topcategories.scss";
import { useRef } from "react";
import SimpleSlider from "@/Common/Slider";

interface Category {
  id: number;
  image: string;
  title: string;
  productsCount: string;
}

const TopCategories = () => {
  const topCategoriesData: Category[] = [
    {
      id: 101,
      image: TopCategories1,
      title: "Wing Chair",
      productsCount: "3,584 Products",
    },
    {
      id: 102,
      image: TopCategories2,
      title: "Modern Chair",
      productsCount: "2,345 Products",
    },
    {
      id: 103,
      image: TopCategories3,
      title: "Luxury Sofa",
      productsCount: "1,234 Products",
    },
  ];

  let sliderRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="mt-14 max-width">
      <SectionHeader title="Top Categories" sliderRef={sliderRef} />
      <div className="categories">
        <SimpleSlider showSlides={3} sliderRef={sliderRef}>
          {topCategoriesData.map((category) => (
            <div key={category.id} className="parent">
              <img
                src={category.image}
                alt={category.title}
                className="child-first"
              />
              <div className="child-second">
                <h4 className="font-inter font-semibold text-[16px] leading-[22px]">
                  {category.title}
                </h4>
                <p className="font-normal font-inter text-[12px] leading-[15.4px]">
                  {category.productsCount}
                </p>
              </div>
            </div>
          ))}
        </SimpleSlider>
      </div>
    </div>
  );
};

export default TopCategories;
