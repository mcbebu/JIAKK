import { useState } from "react";
import Button from "./Button";
import CenteredText from "./CenteredText";

const TextButton = ({ onPress, isActive, children }) => {
  const activeStyle = {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    fontSize: 20,
  };

  const inactiveStyle = {
    fontSize: 20,
    opacity: 0.5,
  }

  return (
    <Button onPress={onPress}>
      {isActive ? (
        <CenteredText styles={activeStyle}>{children}</CenteredText>
      ) : (
        <CenteredText styles={inactiveStyle}>{children}</CenteredText>
      )}
    </Button>
  );
};

export default TextButton;