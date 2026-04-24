import React from "react";
import { Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GoldenButton from "../components/GoldenButton";
import { useNavigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#C8A97E" },
    background: { default: "#0D0D0D", paper: "#161616" },
  },
});

const PLACEHOLDER_USERS = [
  { initials: "JD", name: "John Doe", role: "Administrador" },
  { initials: "RF", name: "Regina Flores", role: "Usuario" },
  { initials: "VL", name: "Valeria Lopez", role: "Usuario" },
  { initials: "DS", name: "Daniela Sosa", role: "Usuario" },
];

const Users = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=DM+Sans:wght@300;400;600&display=swap"
        rel="stylesheet"
      />

      <Box
        sx={{
          minHeight: "calc(100vh - 64px)",
          bgcolor: "#0D0D0D",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: 3,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Fondo decorativo */}
        <Box sx={{
          position: "absolute", width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,169,126,0.05) 0%, transparent 70%)",
          top: "50%", left: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none",
        }} />

        <Box sx={{ zIndex: 1, width: "100%", maxWidth: 600, textAlign: "center" }}>

          {/* Ícono */}
          <Box sx={{
            width: 72, height: 72, borderRadius: "50%",
            border: "1px solid #C8A97E", display: "flex",
            alignItems: "center", justifyContent: "center",
            mx: "auto", mb: 3, opacity: 0.6,
          }}>
            <AccountCircle sx={{ color: "#C8A97E", fontSize: 32 }} />
          </Box>

          {/* Título */}
          <Typography sx={{
            fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
            fontSize: "2.8rem", color: "#F5ECD7", letterSpacing: "0.04em", mb: 1,
          }}>
            Gestión de Usuarios
          </Typography>

          <Box sx={{ width: 40, height: "1px", bgcolor: "#C8A97E", mx: "auto", opacity: 0.5, mb: 2 }} />

          <Typography sx={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem",
            color: "#555", letterSpacing: "0.1em", mb: 6,
          }}>
            MÓDULO EN CONSTRUCCIÓN
          </Typography>

          {/* Cards de usuarios placeholder */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 6 }}>
            {PLACEHOLDER_USERS.map((u, i) => (
              <Box key={i} sx={{
                bgcolor: "#161616", border: "1px solid #1e1e1e",
                borderRadius: "4px", px: 3, py: 2,
                display: "flex", alignItems: "center", gap: 2.5,
                transition: "border-color 0.2s",
                "&:hover": { borderColor: "#2a2a2a" },
              }}>
                {/* Avatar inicial */}
                <Box sx={{
                  width: 38, height: 38, borderRadius: "50%",
                  bgcolor: "rgba(200,169,126,0.08)",
                  border: "1px solid rgba(200,169,126,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Typography sx={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.9rem", color: "#C8A97E", fontWeight: 600,
                  }}>
                    {u.initials}
                  </Typography>
                </Box>

                {/* Nombre y rol */}
                <Box sx={{ textAlign: "left", flexGrow: 1 }}>
                  <Typography sx={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.88rem", color: "#ccc", fontWeight: 400,
                  }}>
                    {u.name}
                  </Typography>
                  <Typography sx={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.72rem", color: "#444", letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}>
                    {u.role}
                  </Typography>
                </Box>

                {/* Badge */}
                <Box sx={{
                  px: 1.5, py: 0.3,
                  border: "1px solid #222", borderRadius: "2px",
                }}>
                  <Typography sx={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.65rem", color: "#333",
                    letterSpacing: "0.15em", textTransform: "uppercase",
                  }}>
                    Próximamente
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <GoldenButton onClick={() => navigate("/home")} variant="outlined">
            Volver al inicio
          </GoldenButton>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Users;