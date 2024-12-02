import { createTheme } from "@mui/material";
import { fontName } from "../../lib/utils/fontName";

export const appTheme = createTheme({
  cssVariables: true,
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
    borderRadius: 12,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: () => ({
          boxShadow: "none",
        }),
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        size: "medium",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      variants: [
        {
          props: {
            size: "large",
          },
          style: () => ({
            font: fontName.onest("600 16px"),
            height: "48px",
          }),
        },
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
            font: fontName.onest("500 12px"),
            height: "30px",
          }),
        },
      ],
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          font: fontName.onest("400 14px"),
        },
      },
    },
    MuiFormHelperText: {
      variants: [
        {
          props: {
            className: "small",
          },
          style: {
            font: fontName.onest("400 10px"),
            lineHeight: "14px",
          },
        },
      ],
    },
    MuiOutlinedInput: {
      defaultProps: {
        size: "medium",
      },
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
            font: fontName.onest("400 14px"),
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
