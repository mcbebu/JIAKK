const IconButton = ({ url, icon }) => {
  const onClick = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div
      onClick={() => onClick(url)}
      className={`${url ? "cursor-pointer" : ""} mx-1 my-0`}
    >
      <img src={icon} alt="icon button" />
    </div>
  );
};

export default IconButton;
