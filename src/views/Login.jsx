import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#C8A97E" },       // dorado cálido
    background: { default: "#0D0D0D", paper: "#161616" },
  },
  typography: {
    fontFamily: "'Cormorant Garamond', serif",
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.95rem",
            "& fieldset": { borderColor: "#333" },
            "&:hover fieldset": { borderColor: "#C8A97E" },
            "&.Mui-focused fieldset": { borderColor: "#C8A97E" },
          },
          "& .MuiInputLabel-root.Mui-focused": { color: "#C8A97E" },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "'DM Sans', sans-serif",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          fontWeight: 600,
          fontSize: "0.8rem",
          padding: "12px 0",
          borderRadius: "2px",
          transition: "all 0.3s ease",
        },
      },
    },
  },
});

// ── Componente ────────────────────────────────────────────
const Login = ({ login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Por favor llena todos los campos.");
      return;
    }

    setLoading(true);
    try {
      const res = await login({ username, password });
      if (res.ok) {
        
      } else {
        setError(res.message || "Credenciales incorrectas.");
      }
    } catch {
      setError("No se pudo conectar al servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=DM+Sans:wght@300;400;600&display=swap"
        rel="stylesheet"
      />

      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Fondo decorativo */}
        <Box
          sx={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,169,126,0.07) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 40,
            right: 80,
            width: 180,
            height: 180,
            border: "1px solid rgba(200,169,126,0.12)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 60,
            left: 60,
            width: 100,
            height: 100,
            border: "1px solid rgba(200,169,126,0.08)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        {/* Card */}
        <Box
          component="form"
          onSubmit={onSubmit}
          sx={{
            width: "100%",
            maxWidth: 420,
            bgcolor: "background.paper",
            border: "1px solid #222",
            borderRadius: "4px",
            p: { xs: 4, sm: 6 },
            zIndex: 1,
            boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
          }}
        >
          {/* Logo / título */}
          <Box sx={{ mb: 5, textAlign: "center" }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "2.6rem",
                color: "#C8A97E",
                letterSpacing: "0.06em",
                lineHeight: 1,
                mb: 1,
              }}
            >
              Bienvenido
            </Typography>
            <Box
              sx={{
                width: 40,
                height: 1,
                bgcolor: "#C8A97E",
                mx: "auto",
                opacity: 0.6,
              }}
            />
            <Typography
              sx={{
                mt: 1.5,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.78rem",
                color: "#666",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Inicia sesión para continuar
            </Typography>
          </Box>

          {/* Error */}
          {error && (
            <Alert
              severity="error"
              sx={{
                mb: 3,
                bgcolor: "rgba(211,47,47,0.1)",
                border: "1px solid rgba(211,47,47,0.3)",
                color: "#ef9a9a",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.85rem",
                "& .MuiAlert-icon": { color: "#ef9a9a" },
              }}
            >
              {error}
            </Alert>
          )}

          {/* Inputs */}
          <TextField
            fullWidth
            label="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            variant="outlined"
            sx={{ mb: 2.5 }}
            InputLabelProps={{ style: { fontFamily: "'DM Sans', sans-serif", color: "#555" } }}
          />

          <TextField
            fullWidth
            label="Contraseña"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            sx={{ mb: 4 }}
            InputLabelProps={{ style: { fontFamily: "'DM Sans', sans-serif", color: "#555" } }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((s) => !s)}
                    edge="end"
                    sx={{ color: "#555" }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Botón */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{
              bgcolor: "#C8A97E",
              color: "#0D0D0D",
              "&:hover": { bgcolor: "#b8956a" },
              "&:disabled": { bgcolor: "#333", color: "#666" },
            }}
          >
            {loading ? (
              <CircularProgress size={22} sx={{ color: "#0D0D0D" }} />
            ) : (
              "Entrar"
            )}
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Login;
