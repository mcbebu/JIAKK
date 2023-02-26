import TextButton from "./TextButton";

const LoginButton = ({ onClick, children }) => {
  return (
    <TextButton
      styles={"absolute bottom-20 w-5/6 rounded-lg self-center py-2 text-center text-2xl bg-cyan-300"}
      onClick={onClick}
    >
      {children}
    </TextButton>
  );
};

export default LoginButton;
