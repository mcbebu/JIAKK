const IconButton = ({ onClick, iconSrc }) => {
  return (
    <div
      onClick={onClick}
      className={`${onClick ? "cursor-pointer" : ""} m-auto p-2 w-10 h-10`}
    >
      <img src={iconSrc} alt="icon button" />
    </div>
  );
};

export default IconButton;
