interface LayOutProp {
  children: React.ReactNode;
}

const LayOut = ({ children }: LayOutProp) => {
  return (
    <div className="bg-gray-800 flex flex-col gap-8 h-200">{children}</div>
  );
};

export default LayOut;
