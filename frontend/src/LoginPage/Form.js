import { useState } from "react";
import Title from "../components/Text/Title";
import EmailIcon from "../assets/Email.svg";
import PasswordIcon from "../assets/Password.svg";
import VisibleIcon from "../assets/Visible.svg";
import InvisibleIcon from "../assets/Invisible.svg";
import TextInputField from "../components/FormComponents/TextInputField";
import PasswordInputField from "../components/FormComponents/PasswordInputField";
import LoginButton from "../components/Buttons/LoginButton";

const Form = ({ title, children, loginHandler }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const handleEmailKeyPress = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordKeyPress = (event) => {
    setPassword(event.target.value);
  };

  const toggleVisibility = () => {
    setIsVisible((prevState) => {
      console.log(prevState);
      return !prevState;
    });
  };

  return (
    <div className="w-full relative p-20 flex flex-col space-y-10">
      <Title label={title} />
      <TextInputField
        iconSrc={EmailIcon}
        textValue={email}
        textOnChange={handleEmailKeyPress}
        textPlaceholder={"Email Address"}
      />
      <PasswordInputField
        leftIconSrc={PasswordIcon}
        rightIconSrc={isVisible ? VisibleIcon : InvisibleIcon}
        textValue={password}
        textOnChange={handlePasswordKeyPress}
        textPlaceholder={"Password"}
        isVisible={isVisible}
        toggleVisibility={toggleVisibility}
      />
      {children}
      <LoginButton onClick={loginHandler}/>
    </div>
  );
};

export default Form;
