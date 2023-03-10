import React from "react";
import { Pressable, Text, HStack } from "native-base";

interface Props {
  company: string;
}

const CompanyButton = ({ company }: Props) => {
  let bgColor;
  let borderColor;
  let shadowColor;

  switch (company) {
    case "AWS":
      bgColor = "#FF9900";
      borderColor = "#FF9900";
      shadowColor = "#D17E00";
      break;
    case "Google":
      bgColor = "#4285F4";
      borderColor = "#4285F4";
      shadowColor = "#2962CC";
      break;
    case "Microsoft":
      bgColor = "#F25022";
      borderColor = "#F25022";
      shadowColor = "#BF1D05";
      break;
    case "Uber":
      bgColor = "#848484";
      borderColor = "#848484";
      shadowColor = "#616161";
      break;
    case "LinkedIn":
      bgColor = "#0077B5";
      borderColor = "#0077B5";
      shadowColor = "#005C8E";
      break;
    default:
      bgColor = null;
      borderColor = null;
      shadowColor = null;
  }

  return (
    <Pressable
      py={1.5}
      px={3}
      rounded={16}
      borderWidth={1}
      borderColor={borderColor}
      backgroundColor={bgColor}
      shadow={shadowColor ? 3 : undefined}
      _dark={{ shadow: undefined }}
    >
      <HStack alignItems="center">
        <Text color="white" fontWeight="bold">
          {company}
        </Text>
      </HStack>
    </Pressable>
  );
};

export default CompanyButton;
