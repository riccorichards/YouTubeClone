import { Box } from "@mui/material";
import { FC, useEffect, useState } from "react";
import VideoCard, { VideoItemType } from "./videoContent/VideoCard";
import { makeRequest } from "../utils/fetchFromAPI";
import { ScrollToTop } from "../utils/utils";

const RelativeVideos: FC<{ videoId: string }> = ({ videoId }) => {
  const [videos, setVideos] = useState<VideoItemType[]>([]);
  useEffect(() => {
    makeRequest(`search?part=id,snippet&type=video&relatedToVideoId=${videoId}`)
      .then((data) => setVideos(data.items))
      .catch((err) => {
        throw new Error("Error while fetching relational viodes:" + err);
      });
  }, [videoId]);

  if (videos.length < 0) return "Loading...";

  return (
    <Box
      sx={{
        p: "15px",
        flex: "1",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <ScrollToTop />
      {videos
        .filter((el) => el.snippet.thumbnails.medium)
        .map((video) => (
          <VideoCard item={video} type="relative" key={video.snippet.title} />
        ))}
    </Box>
  );
};

export default RelativeVideos;
