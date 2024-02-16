import { Box } from "@mui/material";
import { FC, useContext, useEffect } from "react";
import { makeRequest } from "../../utils/fetchFromAPI";
import VideoCard, { VideoItemType } from "./VideoCard";
import NoneContent from "../NoneContent";
import Context from "../../utils/Context";

const VideoContent: FC<{ selectedCategory: string }> = ({
  selectedCategory,
}) => {
  const getContext = useContext(Context);

  useEffect(() => {
    makeRequest(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => getContext?.setVideos(data.items))
      .catch((err) => {
        throw new Error("Error while fetching video content: " + err);
      });
  }, [selectedCategory, getContext]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        minHeight: "calc(100vh - 30px)", //30px header
      }}
    >
      {getContext.videos && getContext.videos?.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "15px",
            width: "90%",
          }}
        >
          {getContext.videos.map((item: VideoItemType) =>
            item.snippet.thumbnails.medium ? (
              <VideoCard
                type="new"
                item={item}
                key={item ? item.snippet.title : Math.random() * 1000 + 1}
              />
            ) : null
          )}
        </Box>
      ) : (
        <NoneContent />
      )}
    </Box>
  );
};

export default VideoContent;
