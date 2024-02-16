import { Box, Typography } from "@mui/material";
import logoImage from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
const Logo = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  return (
    <Box
      sx={{
        width: "120px",
        border: "1px solid #365b52",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        ":active": {
          transform: "scale(0.99)",
        },
      }}
      onClick={() => goToHome()}
    >
      <img src={logoImage} alt="logo" width={60} />
      <Typography
        variant="h4"
        sx={{ fontFamily: "Protest Strike", color: "#2fbfb5" }}
      >
        You
      </Typography>
    </Box>
  );
};

export default Logo;
