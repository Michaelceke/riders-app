import React from "react";
import { Icon, Center, NativeBaseProvider } from "native-base";
import { Path, G } from "react-native-svg";

interface CloseSquareProps {
  fill: string;
}

export const CloseSquare = ({ fill }: CloseSquareProps) => {
  return (
    <Icon width="24" height="24" viewBox="0 0 27 27">
      <G fillRule="nonzero" stroke="none" strokeWidth={1} fill={"none"}>
        <Path
          d="M16.1947 10.7939L10.8037 16.1849"
          stroke={fill}
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M16.1968 16.1886L10.8013 10.792"
          stroke={fill}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.3762 3.09375H8.62361C5.22499 3.09375 3.09424 5.50012 3.09424 8.9055V18.0945C3.09424 21.4999 5.21486 23.9062 8.62361 23.9062H18.3751C21.785 23.9062 23.9067 21.4999 23.9067 18.0945V8.9055C23.9067 5.50012 21.785 3.09375 18.3762 3.09375Z"
          stroke={fill}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    </Icon>
  );
};
