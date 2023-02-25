const TextButton = ({ onClick, children, styles }) => {
  return (
    <div
      onClick={onClick}
      className={`${onClick ? "cursor-pointer" : ""} ${styles || ""}`}
    >
      {children}
    </div>
  );
};
export default TextButton;
