import React from 'react';
import { Icon, Center, NativeBaseProvider } from 'native-base';
import { Path, G, Line } from 'react-native-svg';

interface DashMenuProps {
  fill: string;
}

export const DashMenu = ({ fill }: DashMenuProps) => {
  return (
    <Icon width="25" height="19" viewBox="0 0 25 19">
      <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
        <Line
          x1="0.694444"
          y1="1.30556"
          x2="24.3056"
          y2="1.30556"
          stroke={fill}
          stroke-width="1.38889"
          stroke-linecap="round"
        />
        <Line
          x1="0.694444"
          y1="9.63856"
          x2="24.3056"
          y2="9.63856"
          stroke={fill}
          stroke-width="1.38889"
          stroke-linecap="round"
        />
        <Line
          x1="0.694444"
          y1="17.9725"
          x2="24.3056"
          y2="17.9725"
          stroke={fill}
          stroke-width="1.38889"
          stroke-linecap="round"
        />
      </G>
    </Icon>
  );
};

