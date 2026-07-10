interface LayOutProp {
  children: React.ReactNode;
}

const LayOut = (prop: LayOutProp) => {
  const { children } = prop;
  return (
    <div className="bg-gray-800 flex flex-col items-center gap-8 h-200">
      {children}
    </div>
  );
};

export default LayOut;
