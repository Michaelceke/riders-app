import React from "react";
import { Icon, Center, NativeBaseProvider } from "native-base";
import { Path, G } from "react-native-svg";

interface ClockProps {
  fill: string;
}

export const Clock = ({ fill }: ClockProps) => {
  return (
    <Icon width="22" height="22" viewBox="0 0 22 22">
      <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.7153 10.8284C20.7153 16.2897 16.2887 20.7163 10.8274 20.7163C5.36604 20.7163 0.939453 16.2897 0.939453 10.8284C0.939453 5.36702 5.36604 0.94043 10.8274 0.94043C16.2887 0.94043 20.7153 5.36702 20.7153 10.8284Z"
          stroke={fill}
          stroke-width="1.60345"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M14.4958 13.9741L10.4658 11.5699V6.38867"
          stroke={fill}
          stroke-width="1.60345"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    </Icon>
  );
};
