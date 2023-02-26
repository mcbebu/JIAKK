import { useState } from "react";
import ChangePassword from "../components/FormComponents/ChangePassword";
import CenteredText from "../components/Grid/CenteredText";
import Form from "./Form";
import NinjaIcon from "../assets/Ninja.svg";
import LogoIcon from "../assets/Logo.svg";
import { login } from "../api";

const LoginPage = ({ loginHandler, registerHandler }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChecked = () => {
    setIsChecked((prevState) => {
      return !prevState;
    });
  };

  const resetPasswordHandler = () => {
    return null;
  };

  return (
    <div className="flex flex-col relative justify-evenly bg-cover bg-login-page w-screen h-screen">
      <div className="w-3/4 h-3/4 self-center rounded-3xl bg-red-100/80 flex flex-row justify-between divide-x-4">
        <Form title={"Login"} buttonHandler={loginHandler}>
          <ChangePassword
            isChecked={isChecked}
            handleOnChecked={handleOnChecked}
            resetPasswordHandler={resetPasswordHandler}
          />
        </Form>
        <Form title={"Register"} buttonHandler={registerHandler} />
      </div>
      <div className="flex flex-row w-3/4 self-center justify-between">
        <img src={LogoIcon} alt="NinjaVan" />
      </div>
      <p className="absolute bottom-10 right-10">
        By logging in, you are agreeing to our Term and Privacy Policy
      </p>
      <img
        src={NinjaIcon}
        alt="NinjaIcon"
        className="absolute bottom-10 left-10"
      />
    </div>
  );
};

export default LoginPage;
