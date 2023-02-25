import { useState } from "react";
import ChangePassword from "../components/FormComponents/ChangePassword";
import Form from "./Form";

const LoginPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChecked = () => {
    setIsChecked((prevState) => {
      return !prevState;
    });
  };

  const resetPasswordHandler = () => {
    return null;
  }

  return (
    <div className="flex justify-around bg-cover bg-login-page w-screen h-screen">
      <div className="w-3/4 h-3/4 self-center rounded-3xl bg-red-100/80 flex flex-row justify-between divide-x-4">
        <Form title={"Login"}>
          <ChangePassword
            isChecked={isChecked}
            handleOnChecked={handleOnChecked}
            resetPasswordHandler={resetPasswordHandler}
          />
        </Form>
        <Form title={"Register"} />
      </div>
    </div>
  );
};

export default LoginPage;
