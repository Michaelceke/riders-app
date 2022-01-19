import React from "react";
import { Icon, Center, NativeBaseProvider } from "native-base";
import { Path, G } from "react-native-svg";

interface BicycleProps {
  fill: string;
}

export const Bicycle = ({ fill }: BicycleProps) => {
  return (
    <Icon width="25" height="15" viewBox="0 0 25 15">
      <G fillRule="nonzero" stroke="none" strokeWidth={1} fill={fill}>
        <Path
          d="M24.4382 7.51525C23.568 5.82269 21.8226 4.76057 19.9194 4.7655C19.3815 4.76594 18.8471 4.85242 18.3365 5.02163L16.2562 0.860986H19.5289C19.7446 0.860986 19.9194 1.03581 19.9194 1.25144C19.9194 1.46706 19.7446 1.64189 19.5289 1.64189H17.9671C17.7515 1.64189 17.5767 1.81671 17.5767 2.03234C17.5767 2.24797 17.7515 2.42279 17.9671 2.42279H19.5289C20.1759 2.42279 20.7003 1.89837 20.7003 1.25144C20.7003 0.604509 20.1759 0.080084 19.5289 0.080084H15.6244C15.4088 0.0789127 15.2331 0.252761 15.2318 0.468388C15.2315 0.529689 15.2456 0.590209 15.273 0.645067L15.7736 1.64189H8.83757L8.44711 0.860986H10.5485C10.7641 0.860986 10.939 0.686162 10.939 0.470535C10.939 0.254908 10.7641 0.080084 10.5485 0.080084H6.64401C6.42838 0.080084 6.25356 0.254908 6.25356 0.470535C6.25356 0.686162 6.42838 0.860986 6.64401 0.860986H7.57407L8.15974 2.03234L6.66509 5.02163C4.00246 4.14468 1.13309 5.59223 0.256133 8.25486C-0.620821 10.9175 0.826728 13.7869 3.48936 14.6638C6.15199 15.5408 9.02137 14.0932 9.89832 11.4306C10.0263 11.0421 10.1068 10.6396 10.1382 10.2318H12.5008C12.5324 10.2316 12.5639 10.2276 12.5945 10.2197L12.6027 10.2178C12.6117 10.2154 12.6195 10.2103 12.6285 10.2076C12.6443 10.2029 12.6598 10.1974 12.6749 10.1908C12.6773 10.1908 12.6784 10.1877 12.6804 10.1865C12.6823 10.1853 12.6913 10.1811 12.6964 10.1779C12.7077 10.1706 12.7187 10.1626 12.7292 10.1541C12.746 10.1423 12.7619 10.1292 12.7768 10.1151L12.7921 10.0994C12.7979 10.0928 12.8014 10.0854 12.8069 10.0784C12.8124 10.0713 12.8252 10.0585 12.8327 10.0467C12.8358 10.0413 12.8373 10.035 12.8401 10.0296C12.8428 10.0241 12.8471 10.021 12.8498 10.0159L16.4053 2.90539L17.6157 5.32619C15.1272 6.60569 14.1471 9.66024 15.4266 12.1487C16.7061 14.6372 19.7607 15.6173 22.2491 14.3377C24.7376 13.0582 25.7177 10.0037 24.4382 7.51525ZM5.08221 14.1363C2.71017 14.1396 0.784559 12.2194 0.781241 9.84737C0.777922 7.47533 2.69816 5.54972 5.0702 5.5464C5.49072 5.54581 5.90904 5.60697 6.31179 5.72796L4.3423 9.66683C4.24591 9.85971 4.32415 10.0942 4.51703 10.1906C4.5713 10.2177 4.63109 10.2318 4.69175 10.2318H9.35725C9.15368 12.4417 7.30143 14.1333 5.08221 14.1363ZM5.3235 9.45091L7.03798 6.02236C8.34677 6.69311 9.22172 7.98652 9.35725 9.45091H5.3235ZM10.1382 9.45091C10.001 7.69037 8.9586 6.12764 7.38587 5.32462L8.59627 2.90383L11.869 9.45091H10.1382ZM12.5008 8.96831L9.22802 2.42279H15.7735L12.5008 8.96831ZM21.1609 13.9548C20.7582 14.0758 20.3399 14.1369 19.9193 14.1363C17.549 14.1383 15.6259 12.2183 15.624 9.848C15.6227 8.23436 16.5266 6.75636 17.9636 6.02236L19.9603 10.0159C20.0567 10.2089 20.2913 10.2872 20.4843 10.1908C20.6773 10.0944 20.7556 9.85981 20.6593 9.66683L18.6898 5.72796C20.9616 5.0456 23.3564 6.33404 24.0388 8.60583C24.7212 10.8776 23.4327 13.2724 21.1609 13.9548Z"
          fill={fill}
        />
      </G>
    </Icon>
  );
};
