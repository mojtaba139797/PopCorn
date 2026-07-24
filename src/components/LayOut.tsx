interface LayOutProp {
  children: React.ReactNode;
}

const LayOut = (prop: LayOutProp) => {
  const { children } = prop;
  return (
    <div className="bg-gray-800 flex flex-col items-center gap-8 min-h-200 pb-4">
      {children}
    </div>
  );
};

export default LayOut;
