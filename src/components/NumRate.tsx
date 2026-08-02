import { useState } from "react";

interface NumRateProp {
  content: number;
  rate: number;
  setRate: (newRate: number) => void;
}

const NumRate = (prop: NumRateProp) => {
  // استخراج پراپ ها
  const { content, rate, setRate } = prop;
  // استیت وضعیت هاور بودن یا نبودن
  const [hover, setHover] = useState(false);
  // هندلر تاگل کردن وضعیت هاور
  const handleHover = () => {
    setHover(!hover);
  };
  // هندلر برای تغییر ریت، طبق عدد داخل هر دایره
  const handleClick = () => {
    setRate(content);
  };

  const handleDoubleClick = () => {
    setRate(0);
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      className={`w-4 h-4 md:w-7 md:h-7 lg:w-9 lg:h-9 cursor-pointer rounded-full ${content === rate ? "bg-yellow-400" : "bg-gray-300"} ${content < rate ? "bg-yellow-400" : "bg-gray-300"} ${hover ? "bg-yellow-400" : "bg-gray-300"} flex justify-center items-center`}
    >
      <span
        className={`text-[10px] md:text-xs lg:text-base ${content <= rate ? "text-white" : "text-black"} ${hover ? "text-white" : "text-black"}`}
      >
        {content}
      </span>
    </div>
  );
};

export default NumRate;
