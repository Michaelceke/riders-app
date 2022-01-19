import React from 'react';
import { Icon, Center, NativeBaseProvider } from 'native-base';
import { Path, G } from 'react-native-svg';

interface ProfileProps {
  fill: string;
}

export const Profile = ({ fill }: ProfileProps) => {
  return (
    <Icon width="31" height="31" viewBox="0 0 31 31">
      <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.0243 19.2383C10.1757 19.2383 6.03516 19.9714 6.03516 22.9072C6.03516 25.8431 10.1494 26.6025 15.0243 26.6025C19.8728 26.6025 24.0122 25.8682 24.0122 22.9335C24.0122 19.9988 19.8991 19.2383 15.0243 19.2383Z"
          stroke={fill}
          stroke-width="1.88044"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.0237 15.051C18.2055 15.051 20.7844 12.4709 20.7844 9.28904C20.7844 6.10721 18.2055 3.52832 15.0237 3.52832C11.8418 3.52832 9.26175 6.10721 9.26175 9.28904C9.25101 12.4601 11.8132 15.0402 14.9831 15.051H15.0237Z"
          stroke={fill}
          stroke-width="1.7909"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    </Icon>
  );
};
