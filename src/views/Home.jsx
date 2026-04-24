import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#C8A97E" },
    background: { default: "#0D0D0D", paper: "#161616" },
  },
});

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 6}s`,
  duration: `${6 + Math.random() * 6}s`,
  size: `${1 + Math.random() * 2}px`,
}));

const Home = ({ user, logout }) => {
  const navigate = useNavigate();

  useEffect(() => {
  const t = setTimeout(() => {}, 80);
  return () => clearTimeout(t);
}, []);

  return (
    <ThemeProvider theme={theme}>
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <style>{`
        @keyframes floatUp {
          0%   { transform: translateY(0)   opacity: 0.6; }
          100% { transform: translateY(-120vh); opacity: 0; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 60px; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 0.9; }
        }
        .particle {
          position: absolute;
          border-radius: 50%;
          background: #C8A97E;
          animation: floatUp linear infinite;
          opacity: 0.5;
          pointer-events: none;
        }
        .fade-item {
          opacity: 0;
          animation: fadeSlideUp 0.8s ease forwards;
        }
      `}</style>

      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#0D0D0D",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          px: 3,
        }}
      >
        {/* Partículas flotantes */}
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              bottom: "-10px",
              width: p.size,
              height: p.size,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}

        {/* Círculo decorativo grande */}
        <Box
          sx={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            border: "1px solid rgba(200,169,126,0.06)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: 380,
            height: 380,
            borderRadius: "50%",
            border: "1px solid rgba(200,169,126,0.10)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />

        {/* Glow central */}
        <Box
          sx={{
            position: "absolute",
            width: 320,
            height: 320,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,169,126,0.09) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />

        {/* Contenido principal */}
        <Box
          sx={{
            textAlign: "center",
            zIndex: 1,
            maxWidth: 600,
          }}
        >
          {/* Etiqueta superior */}
          <Box
            className="fade-item"
            style={{ animationDelay: "0.1s" }}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.5,
              mb: 4,
            }}
          >
            <Box sx={{ width: 30, height: "1px", bgcolor: "#C8A97E", opacity: 0.5 }} />
            <Typography
              sx={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#C8A97E",
                opacity: 0.8,
              }}
            >
              Actividad React 2026
            </Typography>
            <Box sx={{ width: 30, height: "1px", bgcolor: "#C8A97E", opacity: 0.5 }} />
          </Box>

          {/* Nombre principal */}
          <Typography
            className="fade-item"
            style={{ animationDelay: "0.25s" }}
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: { xs: "3.2rem", sm: "4.8rem" },
              lineHeight: 1.05,
              color: "#F5ECD7",
              letterSpacing: "0.02em",
              mb: 0.5,
            }}
          >
            Regina
          </Typography>
          <Typography
            className="fade-item"
            style={{ animationDelay: "0.38s" }}
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontStyle: "italic",
              fontSize: { xs: "3.2rem", sm: "4.8rem" },
              lineHeight: 1.05,
              color: "#C8A97E",
              letterSpacing: "0.02em",
              mb: 3,
            }}
          >
            Flores
          </Typography>

          {/* Línea divisora animada */}
          <Box
            className="fade-item"
            style={{ animationDelay: "0.5s" }}
            sx={{ display: "flex", justifyContent: "center", mb: 3 }}
          >
            <Box
              sx={{
                height: "1px",
                bgcolor: "#C8A97E",
                opacity: 0.4,
                animation: "lineGrow 1.2s 0.5s ease forwards",
                width: 0,
              }}
            />
          </Box>

          {/* Descripción */}
          <Typography
            className="fade-item"
            style={{ animationDelay: "0.6s" }}
            sx={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "1rem",
              color: "#888",
              lineHeight: 1.8,
              mb: 5,
              px: 2,
            }}
          >
            Sistema de gestión de usuarios desarrollado con{" "}
            <span style={{ color: "#C8A97E" }}>React</span> y{" "}
            <span style={{ color: "#C8A97E" }}>Material UI</span>.
            <br />
            {user && (
              <>
                Bienvenida de nuevo,{" "}
                <span style={{ color: "#F5ECD7" }}>{user.username}</span>.
              </>
            )}
          </Typography>

          {/* Botones */}
          <Box
            className="fade-item"
            style={{ animationDelay: "0.75s" }}
            sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}
          >
            <Button
              onClick={() => navigate("/users")}
              variant="contained"
              sx={{
                bgcolor: "#C8A97E",
                color: "#0D0D0D",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.78rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                px: 4,
                py: 1.5,
                borderRadius: "2px",
                "&:hover": { bgcolor: "#b8956a" },
              }}
            >
              Ver Usuarios
            </Button>

            <Button
              onClick={logout}
              variant="outlined"
              sx={{
                borderColor: "#333",
                color: "#666",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                fontSize: "0.78rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                px: 4,
                py: 1.5,
                borderRadius: "2px",
                "&:hover": { borderColor: "#C8A97E", color: "#C8A97E", bgcolor: "transparent" },
              }}
            >
              Cerrar sesión
            </Button>
          </Box>
        </Box>

        {/* Footer */}
        <Box
          className="fade-item"
          style={{ animationDelay: "1s" }}
          sx={{
            position: "absolute",
            bottom: 28,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.68rem",
              color: "#333",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            React · Node · PostgreSQL
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Home;