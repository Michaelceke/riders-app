import React from "react";
import { Icon, Center, NativeBaseProvider } from "native-base";
import { Path, G, Circle, Rect } from "react-native-svg";

interface RouteMarkerProps {
  fill: string;
}

export const RouteMarker = ({ fill }: RouteMarkerProps) => {
  return (
    <Icon width="37" height="64" viewBox="0 0 37 64">
      <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
        <Circle cx="18.6902" cy="5.38408" r="4.79228" fill={fill} />
        <Rect
          x="17.7319"
          y="10.1768"
          width="1.91691"
          height="44.089"
          fill={fill}
        />
        <Circle cx="18.6902" cy="59.0579" r="4.79228" fill={fill} />
      </G>
    </Icon>
  );
};
