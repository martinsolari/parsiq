import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

export const lightTheme = responsiveFontSizes(createMuiTheme({
  props: {
    MuiAppBar: {
      position: "sticky",
    },
    MuiCard: {
      elevation: 0,
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        background: "#fff !important",
      },
    },
    MuiPaper: {
      root: {
        overflow: "visible !important",
      },
    },
  },
  palette: {
    background: {
      default: "#fff",
    },
  },
}));

export const darkTheme = responsiveFontSizes(createMuiTheme({
  props: {
    MuiAppBar: {
      position: "sticky",
    },
    MuiCard: {
      elevation: 0,
    },
  },
  palette: {
    type: "dark",
    background: {
      default: grey[900],
      paper: "#279dff",
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        overflow: "visible !important",
      },
    },
    MuiTable: {
      root: {
        background: "transparent !important",
      },
      
    },
    MuiTableCell: {
        root: {
          color: "#cc7504  transparent !important",
        },
      },
    MuiMenuItem : {
        root: {
          color: "#cc7504  !important",
        },
       },
    MuiLink: {
        root: {
          color: 'linear-gradient(45deg, #cc7504 30%, #04bfcc  90%)'
        },
    },
    MuiButton: {
      root: {
        color: "#279dff !important",
      },
    },
    MuiTextField: {
        root: {      
          overflow: "visible !important",
          color: "#279dff"
        },
    },
    MuiTypography: {
        root: {
            outlineStyle: "#008dff",
            color: "#045bcc" ,
          },
    },
  },
}));

export default {
  darkTheme,
  lightTheme,
};
