import { Box, Typography } from "@mui/material";

const NoneContent = () => {
  return (
    <Box
      sx={{
        width: "30%",
        height: "300px",
        position: "absolute",
        top: "30%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow: "0 0 10px rgb(0, 0, 0, 0.15)",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Typography sx={{ fontFamily: "Protest Strike" }} variant="h3">
          429
        </Typography>
        <Typography sx={{ textAlign: "center" }}>
          Too many request!!!{" "}
          <span style={{ color: "orangered" }}>The Limit is 500 per day</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default NoneContent;
