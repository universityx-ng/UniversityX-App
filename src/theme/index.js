import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  sm: "400px",
  md: "900px",
  lg: "1095px",
})


const theme = extendTheme({
    breakpoints,
    colors: {
      primary: {
        100: "#fff",
        200: "#F1EBFE", //fade white
        300: "#F1F0F0" //dashboard fade white
      },
      secondary: {
       green: "#14F137",
       red: "#FF0000",
      }
    },
  })
  
  
  export default theme;