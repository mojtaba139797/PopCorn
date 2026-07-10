interface MainProp {
  children: React.ReactNode;
}

const Main = ({ children }: MainProp) => {
  return <div className="flex gap-4">{children}</div>;
};

export default Main;
