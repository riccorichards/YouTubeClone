import { Box } from "@mui/material";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import VideoContent from "../components/videoContent/VideoContent";
import { useState } from "react";
import Context from "../utils/Context";
import { VideoItemType } from "../components/videoContent/VideoCard";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Music");
  const [videos, setVideos] = useState<VideoItemType[] | null>(null);

  const values = { videos, setVideos, selectedCategory, setSelectedCategory };
  return (
    <Context.Provider value={values}>
      <Box>
        <Header />
        <Navbar />
        <VideoContent selectedCategory={selectedCategory} />
      </Box>
    </Context.Provider>
  );
};

export default Home;
