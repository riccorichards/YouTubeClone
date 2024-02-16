import { Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  const handleSearchProcess = () => {
    navigate(`/search/${searchTerm}`)
    setSearchTerm("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid",
        p: "5px",
        borderRadius: "10px",
        width: "500px",
        justifyContent: "space-between",
      }}
    >
      <InputBase
        placeholder="Search..."
        sx={{
          fontFamily: "Roboto Condensed, sans-serif",
          backgroundColor: "transparent",
          width: "100%",
        }}
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchTerm(e.target.value)
        }
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "30px",
        }}
        onClick={handleSearchProcess}
      >
        <SearchIcon
          sx={{ cursor: "pointer", ":active": { transform: "scale(0.95)" } }}
        />
      </Box>
    </Box>
  );
};

export default SearchBar;
