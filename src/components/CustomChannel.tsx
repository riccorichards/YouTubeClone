import { Box, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { makeRequest } from "../utils/fetchFromAPI";
import { defineSubscribers } from "../utils/utils";
import CheckCircle from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
export interface CustomChannelType {
  id: string;
  snippet: {
    title: string;
    thumbnails: { default: { url: string; width: number; height: number } };
  };
  statistics: { subscriberCount: string };
}

const CustomChannel: FC<{ channelId: string }> = ({ channelId }) => {
  const [channelDetails, setChannelDetails] = useState<CustomChannelType>();

  useEffect(() => {
    makeRequest(`channels?part=snippet,statistics&id=${channelId}`)
      .then((data) => setChannelDetails(data.items[0]))
      .catch((err) => {
        throw new Error("Error while fetching video by id:" + err);
      });
  }, [channelId]);

  if (!channelDetails) return "Loading...";

  const {
    snippet: {
      title,
      thumbnails: {
        default: { url },
      },
    },
    statistics: { subscriberCount },
  } = channelDetails;

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
      <Box>
        <img
          src={url}
          style={{
            width: "50px",
            height: "50px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <Link
            to={`/channel/${channelId}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography fontWeight={600}>{title}</Typography>
          </Link>
          <CheckCircle style={{ fontSize: "14px", color: "grey" }} />
        </Box>
        <Typography fontSize={13}>
          {defineSubscribers(subscriberCount)}
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomChannel;
