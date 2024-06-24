import { createTheme } from "@mui/material/styles";
import {red,blue} from "@mui/material/colors"

export const theme = createTheme({
    direction: 'rtl',
    typography:{
      fontFamily:"vazir,roboto",
      button: {
        fontStyle: 'italic',
      },
      
    },
    palette :{

        primary : {
            main: '#FF5733',

    }

},
components: {
  // Name of the component
  MuiButtonBase: {
    defaultProps: {

      disableRipple: true, 
    },
  },

  MuiButton: {
    variants: [
      {
        props: { variant: 'dashed' },
        style: {
          textTransform: 'none',
          border: `2px dashed ${blue[500]}`,
        },
      },
      {
        props: { variant: 'dashed', color: 'secondary' },
        style: {
          border: `4px dashed ${red[100]}`,
        },
      },
    ],
  },
},
        
  });