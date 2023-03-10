import React from "react";
import { HStack, Image } from "native-base";
import myImage from "../../../assets/app-logo.png";

interface Props {
  size?: number;
}

const LogoIcon = ({ size }: Props) => {
  return (
    <HStack alignItems="center">
      <Image source={myImage} alt="App Logo" size={size} resizeMode="contain" />
    </HStack>
  );
};

LogoIcon.defaultProps = {
  size: 8,
};

export default LogoIcon;
