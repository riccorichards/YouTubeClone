import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SingleVideo from "./pages/SingleVideo";
import SingleChannel from "./pages/SingleChannel";
import SearchedResult from "./pages/SearchedResult";
function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{ overflow: "hidden", fontFamily: "Roboto Condensed, sans-serif" }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:videoId" element={<SingleVideo />} />
          <Route path="/channel/:channelId" element={<SingleChannel />} />
          <Route path="/search/:searchTerm" element={<SearchedResult />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
