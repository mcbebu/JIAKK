const CenteredText = ({ children, styles }) => {
  return (
    <div className="text-center" style={styles}>
      {children}
    </div>
  );
};

export default CenteredText;
