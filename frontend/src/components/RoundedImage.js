import { Image } from "react-native";

const RoundedImage = ({ src }) => {
  return <Image className="rounded-full w-20 h-20" source={src} />;
};

export default RoundedImage;
