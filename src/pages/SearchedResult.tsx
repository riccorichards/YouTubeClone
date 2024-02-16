import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeRequest } from "../utils/fetchFromAPI";
import VideoCard, { VideoItemType } from "../components/videoContent/VideoCard";
import Header from "../components/header/Header";

const SearchedResult = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState<VideoItemType[]>([]);

  useEffect(() => {
    makeRequest(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
      .catch((err) => {
        throw new Error("Error while searching... " + err);
      });
  }, [searchTerm]);

  return (
    <>
      <main>
        <Header />
        <Box sx={{ p: "15px" }}>
          <h3>
            Rearched result:{" "}
            <span style={{ color: "orangered" }}>{searchTerm}</span>
          </h3>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            {videos.map((video) => (
              <VideoCard item={video} type="nonRelative" />
            ))}
          </Box>
        </Box>
      </main>
    </>
  );
};

export default SearchedResult;
