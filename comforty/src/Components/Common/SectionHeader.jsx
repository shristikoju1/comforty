import SliderButton from "./SliderButton"; 

const SectionHeader = ({ title, showSliders = true, sliderRef }) => {

  const handleBackward = () => {
    if(sliderRef.current){
      sliderRef.current.slickPrev();
    }
  }

  const handleForward =() =>{
    console.log("FOrward",sliderRef);
    if(sliderRef.current){
      sliderRef.current.slickNext();
    }
  }

  return (
    <div className="flex justify-between mt-20 mb-12">
      <h2 className="font-semibold text-[32px] leading-[35.2px]">
        {title}
      </h2>
      {showSliders && (
        <div className="flex items-center space-x-4">
          <SliderButton direction="left" onClick={handleBackward} />
          <SliderButton direction="right" onClick={handleForward} />
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
