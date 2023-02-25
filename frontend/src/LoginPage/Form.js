import TextInputField from "../components/FormComponents/TextInputField";
import Title from "../components/Text/Title";
import { useState } from "react";
import EmailIcon from "../assets/Email.svg";
import PasswordIcon from "../assets/Password.svg";

const Form = ({ title, children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailKeyPress = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordKeyPress = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="w-full p-20 flex flex-col space-y-10">
      <Title label={title} />
      <TextInputField
        iconSrc={EmailIcon}
        textValue={email}
        textOnChange={handleEmailKeyPress}
        textPlaceholder={"Email Address"}
      />
      <TextInputField
        iconSrc={PasswordIcon}
        textValue={password}
        textOnChange={handlePasswordKeyPress}
        textPlaceholder={"Password"}
      />
    </div>
  );
};

export default Form;
