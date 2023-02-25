import TextButton from "../Buttons/TextButton";
import SpacedRow from "../Grid/SpacedRow";

const ChangePassword = ({
  isChecked,
  handleOnChecked,
  resetPasswordHandler,
}) => {
  return (
    <div className="flex flex-row justify-between w-full text-lg">
      <div className="flex flex-row space-x-2">
          <input type="checkbox" checked={isChecked} onChange={handleOnChecked} />
          <div className="mx-2">Remember Password</div>
      </div>
      <TextButton styles={"text-sky-400"} onClick={resetPasswordHandler}>
        Forgot Password
      </TextButton>
    </div>
  );
};

export default ChangePassword;
