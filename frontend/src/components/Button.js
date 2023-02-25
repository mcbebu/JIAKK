import { TouchableOpacity, View } from "react-native";
import CColors from "../constants/CColors";

const Button = ({ children, onPress, enabled, styles }) => {
  if (enabled === undefined) enabled = onPress; //enable button by default
  const bStyle = {
    display: "flex",
    borderRadius: 20,
    padding: 10,
    backgroundColor: CColors.button,
    alignItems: "center",
    jusitfyContent: "center",
  };

  if (enabled)
    return (
      <TouchableOpacity
        style={styles}
        className="flex p-1 bg-white/0 items-center justify-center"
        onPress={() => onPress()}
      >
        {children}
      </TouchableOpacity>
    );

  return (
    <View
      style={styles}
      className="flex p-1 bg-white/0 items-center justify-center"
    >
      {children}
    </View>
  );
};

export default Button;
