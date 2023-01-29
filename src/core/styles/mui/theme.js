import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: "60px",
          boxShadow: "none",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "space-between",
          padding: "0 50px",
          ["@media (max-width: 900px)"]: {
            padding: "0 15px",
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          height: "16px",
          width: "16px",
          marginRight: "10px",
          marginLeft: "12px",
          color: "#969696",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          height: "16px",
          width: "16px",
          marginRight: "10px",
          color: "#969696",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          height: 35,
          textTransform: "none",
          padding: "5px 15px 5px 15px",
          borderRadius: "3px",
          fontSize: "18px",
          fontWeight: 400,
          lineHeight: 1.4,
          boxShadow: "none",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.MuiOutlinedInput-root": {
            backgroundColor: "rgba(0,0,0,0.04)",
            "& fieldset": {
              border: "1px solid rgba(0,0,0,0.04)",
            },
            "&:hover fieldset": {
              border: "1px solid rgba(0,0,0,0.15)",
            },
            "&.Mui-error": {
              "&.Mui-focused": {
                "& fieldset": {
                  border: "1px solid red",
                },
              },
              "&:hover fieldset": {
                border: "1px solid red",
              },
            },
            "&.Mui-focused": {
              "& fieldset": {
                border: "1px solid #0F5096",
              },
              boxShadow: "0px 0px 0px 2px rgba(0, 0, 0, 0.1)",
              "&:hover fieldset": {
                border: "1px solid #0F5096",
              },
              "&.Mui-error": {
                "&:hover fieldset": {
                  border: "1px solid red",
                },
              },
            },
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#004289",
      light: "#0f5096",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#fff",
    },
    error: {
      main: "#ef4147",
    },
    background: {
      default: "#fefefe",
      paper: "#f8f8f8",
      neutral: "#efefef",
    },
    text: {
      primary: "#1c1c1c",
      secondary: "#585757",
      tertiary: "#ffffff",
      disabled: "#969696",
    },
  },
  typography: {
    fontFamily: "Satoshi-Variable",
    h1: {
      fontSize: 42,
      fontWeight: 400,
      lineHeight: 1.1,
    },
    h2: {
      fontSize: 32,
      fontWeight: 400,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: 24,
      fontWeight: 400,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: 18,
      fontWeight: 400,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
});
