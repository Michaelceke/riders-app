import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, extendTheme } from "native-base";
import { Provider } from "react-redux";
import { store } from "@src/stores";
import AppRoot from "@src/containers";

const App: React.FC = () => {
  const theme = extendTheme({
    letterSpacings: {
      lg: "0.02em",
    },
    fontSizes: {
      bs: "15px",
      bx: "25px",
    },
    shadows: {
      0: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
      },
    },
    colors: {
      col: {
        50: "#F5401D",
        100: "#F5F5F5",
        200: "#367BF7",
        300: "#F69B88",
        400: "#DFDFDF",
        500: "#FF1B03",
        600: "#FF9900",
        700: "#E48C7A",
        800: "#FFE2E0",
        900: "#474545",
        black: "#000000",
        white: "#ffffff",
        greybold: "#596273",
        navy: "#777E96",
        default: "#092443",
        greylight: "#8F92A1",
        headtext: "#092443",
        accent: "#FBCCC2",
        "broken-border": "#8F92A1",
      },
      col_badge: {
        50: "#247322",
        100: "#B7F1B6",
        200: "#80B57F",
        300: "#F55951",
        400: "#FFE3CD",
        500: "#FFD5D3",
        600: "#4EA14D",
        700: "#C35803",
        800: "#F1D1D1",
      },
      fontConfig: {
        mulish: {
          400: {
            // normal: "mulish",
            italic: "",
          },
        },
      },
    },
    components: {
      Input: {
        defaultProps: {
          borderRadius: "5px",
          height: "50px",
          px: "20px",
        },
      },
      Text: {
        defaultProps: {
          // fontFamily: 'mulish',
        },
      },
      Button: {
        defaultProps: {
          _text: {
            color: "#fff",
            fontWeight: "extrabold",
            fontFamily: "mulish",
            fontSize: "15px",
          },
        },
      },
    },
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>
          <AppRoot />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
