import TextInput from "../Input/TextInput";
import Icon from "../Image/Icon";

const TextInputField = ({ iconSrc, textValue, textOnChange, textPlaceholder }) => {
  return (
    <div className="flex flex-row h-fit space-x-8 border-b-4">
      <Icon src={iconSrc} className={"h-10 h-10"} />
      <TextInput
        value={textValue}
        onChange={textOnChange}
        placeholder={textPlaceholder}
      />
    </div>
  );
};

export default TextInputField;
