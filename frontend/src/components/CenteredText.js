import { Text } from "react-native";

const CenteredText = ({ children, styles }) => {
  return (
    <Text className="text-center" style={styles}>
      {children}
    </Text>
  );
};

export default CenteredText;
