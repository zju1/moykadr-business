import { createTheme } from "@mui/material";
import { fontName } from "../../lib/utils/fontName";

export const appTheme = createTheme({
  palette: {
    primary: {
      main: "#2C6EE9",
      contrastText: "#ffffff",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "'Onest Variable', sans-serif",
    },
  },
  shape: {
    borderRadius: 5,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      variants: [
        {
          props: {
            size: "medium",
          },
          style: () => ({
            font: fontName.onest("500 18px"),
            height: "50px",
          }),
        },
        {
          props: {
            size: "small",
          },
          style: () => ({
            font: fontName.onest("400 15px"),
            height: "40px",
          }),
        },
      ],
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          font: fontName.onest("500 14px"),
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          background: theme.palette.background.paper,
        }),
        notchedOutline: ({ theme }) => ({
          border: `1px solid ${theme.palette.grey[300]}`,
        }),
      },
      variants: [
        {
          props: {
            size: "medium",
          },
          style: () => ({
            font: fontName.onest("500 18px"),
            height: "45px",
          }),
        },
        {
          props: {
            size: "small",
          },
          style: () => ({
            font: fontName.onest("400 15px"),
            height: "35px",
          }),
        },
      ],
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          font: fontName.unbounded("400 12px"),
        },
      },
    },
  },
});
