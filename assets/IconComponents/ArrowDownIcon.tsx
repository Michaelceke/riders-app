import React from "react";
import { Icon, Center, NativeBaseProvider } from "native-base";
import { Path, G } from "react-native-svg";

interface ArrowDownIconProps {
  fill: string;
}

export const ArrowDownIcon = ({ fill }: ArrowDownIconProps) => {
  return (
    <Icon width="24" height="24" viewBox="0 0 24 24">
      <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
        <Path
          d="M12.2515 12.7V3.75"
          stroke={fill}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.25049 12.7002L12.2515 20.6372L17.2525 12.7002H7.25049Z"
          stroke={fill}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    </Icon>
  );
};
