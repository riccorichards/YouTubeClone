import { Box, Typography } from "@mui/material";
import { FC } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { handleDate } from "../../utils/utils";
import { Link } from "react-router-dom";

export interface VideoItemType {
  kind: "youtube#searchResult";
  id: { kind: string; videoId: string };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    tags: string[];
    liveBroadcastContent: string;
    publishTime: string;
  };
  statistics: { viewCount: string; likeCount: string; commentCount: string };
}

const VideoCard: FC<{ item: VideoItemType; type: string }> = ({
  item,
  type,
}) => {
  if (!item) return null;

  const {
    id: { videoId },
    snippet: { thumbnails, title, channelTitle, channelId, publishTime },
  } = item;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: type === "relative" ? "row" : "column",
        gap: "5px",
        width: type === "relative" ? "100%" : "320px",
      }}
    >
      <Box>
        <img
          src={thumbnails?.medium?.url}
          alt={title}
          style={{
            borderRadius: "15px",
            height: type === "relative" ? "135px" : "180px",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={`/video/${videoId}`}
        >
          <Typography
            sx={{ fontWeight: "bold", width: "100%", fontSize: type === "relative" ? "14px" : "18px" }}
          >
            {title.slice(0, 50) + "..."}
          </Typography>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={`/channel/${channelId}`}
        >
          <Typography
            color="grey"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "2.5px",
              fontSize: "14px",
            }}
          >
            {channelTitle}
            <CheckCircleIcon sx={{ fontSize: "14px" }} />
          </Typography>
        </Link>
        <Typography fontSize={14} color="grey">
          {`${handleDate(publishTime)}`}
        </Typography>
      </Box>
    </Box>
  );
};

export default VideoCard;
