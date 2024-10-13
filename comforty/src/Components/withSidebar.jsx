const withSidebar = (WrappedComponent) => {
  // Close sidebar when clicking on unfocused blur background
  const handleCloseSidebar = (e, onClose) => {
    if (e.target.classList.contains("backdrop")) {
      onClose();
    }
  };

  const Hoc = ({
    isOpen,
    onClose,
    isLeft = false,
    withOffset = false,
    ...props
  }) => {
    // to include or exclude navbar in the overlay, h-[68px] is height of CartNavbar
    const topClass = withOffset ? "top-[68px]" : "top-0";
    let isLeftCondition = isLeft ? "-translate-x-full" : "translate-x-full";
    

    return (
      <div>
        {isOpen && (
          <button
            className={`fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm backdrop ${topClass}`}
            onClick={(e) => handleCloseSidebar(e, onClose)} // Pass onClose here
          ></button>
        )}
        <div
          className={`fixed top-0 h-full w-[320px] bg-white transform ${topClass} ${
            isOpen ? "translate-x-0" : isLeftCondition
          } transition-transform duration-300 ease-in-out z-50 ${
            isLeft ? "left-0" : "right-0"
          }`}
        >
          <WrappedComponent onClose={onClose} {...props} />
        </div>
      </div>
    );
  };
  return Hoc;
};

export default withSidebar;
