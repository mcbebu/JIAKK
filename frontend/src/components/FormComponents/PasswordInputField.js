import PasswordInput from "../Input/PasswordInput";
import Icon from "../Image/Icon";
import TextInput from "../Input/TextInput";

const PasswordInputField = ({
  leftIconSrc,
  rightIconSrc,
  textValue,
  textOnChange,
  textPlaceholder,
  isVisible,
  toggleVisibility,
}) => {
  return (
    <div className="flex flex-row h-fit space-x-8 border-b-4">
      <Icon src={leftIconSrc} />
      {isVisible ? (
        <TextInput
          value={textValue}
          onChange={textOnChange}
          placeholder={textPlaceholder}
        />
      ) : (
        <PasswordInput
          value={textValue}
          onChange={textOnChange}
          placeholder={textPlaceholder}
        />
      )}
      <div className="w-fit float-right">
          <Icon src={rightIconSrc} onClick={toggleVisibility} />
      </div>
    </div>
  );
};

export default PasswordInputField;
