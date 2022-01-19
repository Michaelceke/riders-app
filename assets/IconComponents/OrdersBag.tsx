import React from 'react';
import { Icon, Center, NativeBaseProvider } from 'native-base';
import { Path, G } from 'react-native-svg';

interface OrdersbagProps {
  fill: string;
}

export const OrdersBag = ({ fill }: OrdersbagProps) => {
  return (
    <Icon width="22" height="22" viewBox="0 0 22 22">
      <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.135 19.7084H7.48281C4.67198 19.7084 2.51561 18.6932 3.12812 14.607L3.84131 9.06922C4.21889 7.03032 5.51942 6.25 6.66054 6.25H15.9908C17.1487 6.25 18.3737 7.08905 18.81 9.06922L19.5232 14.607C20.0435 18.2317 17.9458 19.7084 15.135 19.7084Z"
          stroke={fill}
          stroke-width="1.60345"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M15.2617 6.04924C15.2617 3.86201 13.4886 2.0889 11.3013 2.0889V2.0889C10.2481 2.08444 9.23644 2.49972 8.4901 3.24291C7.74376 3.9861 7.32421 4.99598 7.32422 6.04924H7.32422"
          stroke={fill}
          stroke-width="1.60345"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M14.0206 10.1773H13.9786"
          stroke={fill}
          stroke-width="1.60345"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8.67488 10.1773H8.63293"
          stroke={fill}
          stroke-width="1.60345"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    </Icon>
  );
};
