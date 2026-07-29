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
    <div className="bg-gray-700 flex flex-col w-45 md:w-65 lg:w-100 min-h-95 max-h-95 md:min-h-115 md:max-h-115 lg:min-h-150 lg:max-h-150 overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-thin scrollbar-thumb-slate-400 scrollbar-thumb-rounded-full rounded-lg">
      <button
        className="z-0 cursor-pointer text-white flex justify-center items-center mt-2 ml-40 md:ml-58 lg:ml-90 bg-black w-4 h-4 rounded-sm"
        onClick={handleClick}
      >
        {isOpen ? "-" : "+"}
      </button>
      {isOpen ? children : ""}
    </div>
  );
};

export default Box;
