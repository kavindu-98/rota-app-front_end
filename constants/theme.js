import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get("window");

export const COLORS = {
    primary: "#5680E9",     // blue
    lightblue: "#84CEEB",
    blue: "#5AB9EA",
    lightgray: "#C1C8E4",
    purple: "#8860D0",
    white: "#fff",
    black: "#000000",
    grey: "#BBBBBB",
    placeholder: "#C7C9D9",
    outLine: "#DDE5E9",
    dark_grey : "#4F5053",
    transparentWhite: 'rgba(255, 255, 255, 0.2)',
    transparentBlack: 'rgba(0, 0, 0, 0.4)',
    

};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  radius_btn: 50,
  radius_btn1: 30,
  radius_btn2: 8,
  padding: 20,
  padding1: 35,
  padding2: 15,
  padding3: 10,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height
};

export const FONTS = {
    largeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;