import { Box } from "@mui/material";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: "15px",
          width: "100%",
        }}
      >
        <Logo />
        <SearchBar />
      </Box>
    </header>
  );
};

export default Header;
