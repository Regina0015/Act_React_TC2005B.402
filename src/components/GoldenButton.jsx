import React from "react";
import Button from "@mui/material/Button";

// Botón personalizado reutilizable
const GoldenButton = ({ children, onClick, variant = "contained", sx = {}, ...props }) => (
  <Button
    onClick={onClick}
    variant={variant}
    sx={{
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 600,
      fontSize: "0.75rem",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      borderRadius: "2px",
      px: 3,
      py: 1,
      ...(variant === "contained"
        ? {
            bgcolor: "#C8A97E",
            color: "#0D0D0D",
            "&:hover": { bgcolor: "#b8956a" },
          }
        : {
            borderColor: "#C8A97E",
            color: "#C8A97E",
            "&:hover": { bgcolor: "rgba(200,169,126,0.08)" },
          }),
      ...sx,
    }}
    {...props}
  >
    {children}
  </Button>
);

export default GoldenButton;