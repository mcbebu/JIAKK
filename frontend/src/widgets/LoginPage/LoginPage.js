import { View } from "react-native";
import SpacedColumn from "../../components/SpacedColumn";
import SpacedRow from "../../components/SpacedRow";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import TextButton from "../../components/TextButton";
import { useState } from "react";
import CenteredText from "../../components/CenteredText";

const LoginPage = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);

  const pressLogin = () => {
    setIsLoginActive(true);
  }

  const pressRegister = () => {
    setIsLoginActive(false);
  }

  return (
      <SpacedColumn>
        <View className="flex flex-col w-11/12 h-3/4 bg-red-200 my-5 rounded-lg">
          <Title>Login</Title>
          <SubTitle>By signing in you are agreeing to our Term and Privacy Policy</SubTitle>
          <SpacedRow>
            <TextButton onPress={pressLogin} isActive={isLoginActive}>
              Login
            </TextButton>
            <TextButton onPress={pressRegister} isActive={!isLoginActive}>
              Register
            </TextButton>
          </SpacedRow>
        </View>
      </SpacedColumn>
  );
};

export default LoginPage;
