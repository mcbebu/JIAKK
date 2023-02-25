const Circle = ({ children, className }) => {
  return <div className={`rounded-full text-center content-center items-center justify-center ${className}`}>{children}</div>;
};

export default Circle;
