import { Box, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { makeRequest } from "../utils/fetchFromAPI";
import { VideoItemType } from "./videoContent/VideoCard";
import CustomChannel from "./CustomChannel";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { defineSubscribers, handleDate } from "../utils/utils";

const SingleVideoContent: FC<{ videoId: string; screenSize: number }> = ({
  videoId,
  screenSize,
}) => {
  const [videoDetails, setVIdeoDetails] = useState<VideoItemType>();
  const [isAllDescription, setIsAllDescription] = useState<boolean>(false);
  useEffect(() => {
    makeRequest(`videos?part=snippet,statistics&id=${videoId}`)
      .then((data) => setVIdeoDetails(data.items[0]))
      .catch((err) => {
        throw new Error("Error while fetching video by id:" + err);
      });
  }, [videoId]);

  if (!videoDetails) return "Loading...";

  const {
    snippet: { title, channelId, description, publishedAt, tags },
    statistics: { likeCount, viewCount, commentCount },
  } = videoDetails;

  const descLength = isAllDescription ? undefined : 300;
  return (
    <Box
      sx={{
        p: "15px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        flex: "2",
      }}
    >
      <div
        style={{
          overflow: "hidden",
          borderRadius: "15px",
          width: "100%",
          height: "500px",
        }}
      >
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          width="100%"
          height="100%"
          controls
        />
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <Typography fontWeight={700} variant="h6">
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: screenSize > 760 ? "center" : "",
            flexDirection: screenSize > 760 ? "row" : "column",
            justifyContent: "space-between",
          }}
        >
          <CustomChannel channelId={channelId} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "25%",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <ThumbUpOffAltIcon />
              <Typography>{likeCount}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <ChatBubbleOutlineIcon />
              <Typography>{commentCount}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <VisibilityIcon />
              <Typography>{viewCount}</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{ backgroundColor: "lightgrey", borderRadius: "8px", p: "5px" }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <Typography fontWeight={600}>{`${defineSubscribers(
              viewCount
            )} views ${handleDate(publishedAt)}`}</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "5px",
              }}
            >
              {tags &&
                tags.length > 0 &&
                tags
                  .slice(0, 3)
                  .map((tag) => (
                    <Typography
                      fontWeight={600}
                      fontSize={14}
                      key={tag}
                    >{`#${tag}`}</Typography>
                  ))}
            </Box>
          </Box>
          <Typography fontSize={13}>
            {description.slice(0, descLength)}
            <span
              style={{
                marginLeft: "15px",
                fontWeight: "600",
                cursor: "pointer",
              }}
              onClick={() => setIsAllDescription((prev) => !prev)}
            >
              {!isAllDescription ? "...More" : "Show less"}
            </span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default SingleVideoContent;
