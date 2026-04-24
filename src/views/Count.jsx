import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GoldenButton from "../components/GoldenButton";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#C8A97E" },
    background: { default: "#0D0D0D", paper: "#161616" },
  },
});

const FRASES = [
  "La constancia vence lo que la dicha no alcanza.",
  "El conocimiento es poder cuando se comparte.",
  "Cada línea de código es una decisión.",
  "La simplicidad es la máxima sofisticación.",
  "Programar es pensar, no solo escribir.",
];

const Count = () => {
  const [count, setCount] = useState(0);
  const [fraseIndex, setFraseIndex] = useState(0);

  const incrementar = () => setCount((c) => c + 1);
  const decrementar = () => setCount((c) => c - 1);
  const reiniciar = () => setCount(0);
  const cambiarFrase = () => setFraseIndex((i) => (i + 1) % FRASES.length);

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
          gap: 6,
          px: 3,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Fondo decorativo */}
        <Box
          sx={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(200,169,126,0.05) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />

        {/* ── Sección 1: Contador ── */}
        <Box
          sx={{
            bgcolor: "#161616",
            border: "1px solid #222",
            borderRadius: "4px",
            p: { xs: 4, sm: 6 },
            textAlign: "center",
            maxWidth: 400,
            width: "100%",
            zIndex: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#C8A97E",
              mb: 3,
            }}
          >
            Contador interactivo
          </Typography>

          {/* Párrafo con variable */}
          <Typography
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "5rem",
              color: count === 0 ? "#444" : count > 0 ? "#C8A97E" : "#ef9a9a",
              lineHeight: 1,
              mb: 1,
              transition: "color 0.3s ease",
            }}
          >
            {count}
          </Typography>

          <Typography
            sx={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.82rem",
              color: "#555",
              mb: 4,
            }}
          >
            El valor actual del contador es{" "}
            <span style={{ color: "#C8A97E" }}>{count}</span>.{" "}
            {count > 10
              ? "¡Qué alto!"
              : count < 0
              ? "En números negativos."
              : "Usa los botones para cambiarlo."}
          </Typography>

          {/* Botones de control */}
          <Box sx={{ display: "flex", gap: 1.5, justifyContent: "center", flexWrap: "wrap" }}>
            <GoldenButton onClick={decrementar} variant="outlined">−</GoldenButton>
            <GoldenButton onClick={reiniciar} variant="outlined" sx={{ color: "#555", borderColor: "#333" }}>
              Reset
            </GoldenButton>
            <GoldenButton onClick={incrementar}>+</GoldenButton>
          </Box>
        </Box>

        {/* ── Sección 2: Frase variable ── */}
        <Box
          sx={{
            bgcolor: "#161616",
            border: "1px solid #222",
            borderRadius: "4px",
            p: { xs: 4, sm: 6 },
            textAlign: "center",
            maxWidth: 520,
            width: "100%",
            zIndex: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#C8A97E",
              mb: 3,
            }}
          >
            Frase del día
          </Typography>

          {/* Párrafo con variable de estado */}
          <Typography
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "1.4rem",
              color: "#F5ECD7",
              lineHeight: 1.6,
              mb: 1,
              minHeight: 70,
              transition: "all 0.3s ease",
            }}
          >
            "{FRASES[fraseIndex]}"
          </Typography>

          <Typography
            sx={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.75rem",
              color: "#444",
              mb: 4,
            }}
          >
            Frase {fraseIndex + 1} de {FRASES.length}
          </Typography>

          {/* Botón que actualiza la variable */}
          <GoldenButton onClick={cambiarFrase}>
            Siguiente frase
          </GoldenButton>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Count;