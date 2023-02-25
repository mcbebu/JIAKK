import { TextInput } from "react-native";

const InputBox = ({
  value,
  onChange,
  placeholder = "",
  keyboardType = "default",
  maxLength = 200,
  styles
}) => {
  return (
    <TextInput
      className="text-base p-1 text-center"
      style={styles}
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
      keyboardType={keyboardType}
      maxLength={maxLength}
    />
  );
};

export default InputBox;
