const CarouselLogic = (images, setImages) => {
    const handleBackward = () => {
      const newImages = images.slice(1).concat(images[0]);
      setImages(newImages);
    };
  
    const handleForward = () => {
      const newImages = images.slice(-1).concat(images.slice(0, -1));
      setImages(newImages);
    };
  
    return { handleBackward, handleForward };
  };
  
  export default  CarouselLogic;