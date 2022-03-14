import {Dimensions} from 'react-native'
const {width, height} = Dimensions.get("window")

export const COLORS = {
    primary: "#5680E9",     // blue
    lightblue: "#84CEEB",
    blue: "#5AB9EA",
    lightgray: "#C1C8E4",
    purple: "#8860D0",
    white: "#fff",
    black: "#000000",
    transparentWhite: 'rgba(255, 255, 255, 0.2)',
    transparentBlack: 'rgba(0, 0, 0, 0.4)',
    

}

export const SIZES = {

}

export const FONTS = {

}

const appTheme = {COLORS, SIZES, FONTS}

export default appTheme