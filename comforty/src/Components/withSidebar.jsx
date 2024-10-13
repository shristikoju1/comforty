import { RxCross2 } from "react-icons/rx";

const withSidebar = (WrappedComponent) => {
  return ({ isOpen, onClose, ...props }) => {

    // Close sidebar when clicking on unfocused blur background
    const handleCloseSidebar = (e) => {
      if (e.target.classList.contains('backdrop')) {
        onClose();  
      }
    };

    return (
      <div>
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm backdrop" onClick={handleCloseSidebar}></div>
        )}
        <div
          className={`fixed right-0 top-0 h-full w-[320px] bg-white transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <WrappedComponent onClose={onClose} {...props} />
          <RxCross2
            className="absolute close-icon top-4 right-4"
            onClick={onClose}
          />
        </div>
      </div>
    );
  };
};

export default withSidebar;
