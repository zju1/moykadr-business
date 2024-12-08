import { lighten, styled } from "@mui/material";

export const AttendanceTable = styled("div")(({ theme }) => ({
  background: theme.palette.grey[100],
  padding: "12px",
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: "12px",
  display: "grid",
  div: {
    overflowX: "auto",
    minHeight: "50dvh",
    display: "grid",
    alignContent: "flex-start",
    "&.loading": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  table: {
    borderCollapse: "collapse",
    minWidth: "100dvw",
    background: "white",
    borderRadius: "12px",
    "th:first-of-type,td:first-of-type": {
      textAlign: "center",
      background: lighten(theme.palette.info.light, 0.9),
    },
    th: {
      background: lighten(theme.palette.success.light, 0.9),
    },
    "th,td": {
      fontFamily: "'Geologica Variable', sans-serif",
      padding: "8px 12px",
      textAlign: "center",
      "&:nth-of-type(2)": {
        minWidth: "250px",
        textAlign: "left",
        background: lighten(theme.palette.warning.light, 0.9),
        position: "sticky",
        left: 0,
      },
      "&.totalHours": {
        background: lighten(theme.palette.success.light, 0.9),
      },
    },
    tbody: {
      "tr:hover td": {
        background: `${lighten(theme.palette.primary.light, 0.8)} !important`,
      },
    },
  },
}));
