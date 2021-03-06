import React from "react";
import { Icon, Center, NativeBaseProvider } from "native-base";
import { Path, G } from "react-native-svg";

interface ShoppingBagProps {
  fill: string;
}
export const ShoppingBag = ({ fill }: ShoppingBagProps) => {
  return (
    <Icon width="23" height="19" viewBox="0 0 23 19">
      <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
        <Path
          d="M20.4062 1H1.84375C1.37776 1 1 1.37776 1 1.84375V17.0312C1 17.4972 1.37776 17.875 1.84375 17.875H20.4062C20.8722 17.875 21.25 17.4972 21.25 17.0312V1.84375C21.25 1.37776 20.8722 1 20.4062 1Z"
          stroke={fill}
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M15.3438 5.21875C15.3438 6.33763 14.8993 7.41069 14.1081 8.20186C13.3169 8.99303 12.2439 9.4375 11.125 9.4375C10.0061 9.4375 8.93306 8.99303 8.14189 8.20186C7.35072 7.41069 6.90625 6.33763 6.90625 5.21875"
          stroke={fill}
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    </Icon>
  );
};
