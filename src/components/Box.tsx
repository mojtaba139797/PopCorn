import { useState } from "react";

interface BoxProp {
  children: React.ReactNode;
}

const Box = (prop: BoxProp) => {
  const { children } = prop;
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-gray-700 flex flex-col w-45 md:w-65 lg:w-100 h-90 md:h-115 lg:h-150 rounded-lg">
      <button
        className="z-0 cursor-pointer text-white flex justify-center items-center mt-2 ml-40 md:ml-60 lg:ml-95 bg-black w-4 h-4 rounded-sm"
        onClick={handleClick}
      >
        {isOpen ? "-" : "+"}
      </button>
      {isOpen ? children : ""}
    </div>
  );
};

export default Box;
