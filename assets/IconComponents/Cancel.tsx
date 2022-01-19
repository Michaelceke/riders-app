import React from "react";
import { Icon, Center, NativeBaseProvider } from "native-base";
import { Path, G, Line } from "react-native-svg";

interface CancelProps {
  fill: string;
}

export const Cancel = ({ fill }: CancelProps) => {
  return (
    <Icon width="18" height="18" viewBox="0 0 18 18">
      <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
        <Line
          x1="1"
          y1="16.1484"
          x2="16.1484"
          y2="0.999943"
          stroke={fill}
          stroke-width="1.33418"
          stroke-linecap="round"
        />
        <Line
          x1="1.94341"
          y1="1"
          x2="17.0919"
          y2="16.1484"
          stroke={fill}
          stroke-width="1.33418"
          stroke-linecap="round"
        />
      </G>
    </Icon>
  );
};
