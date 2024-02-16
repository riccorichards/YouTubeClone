import { Box, Typography } from "@mui/material";
import Header from "../components/header/Header";
import { defineSubscribers } from "../utils/utils";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { makeRequest } from "../utils/fetchFromAPI";
import VideoCard, { VideoItemType } from "../components/videoContent/VideoCard";

export interface ChannelType {
  snippet: {
    title: string;
    description: string;
    customUrl: string;
    publishedAt: string;
    thumbnails: { high: { url: string } };
  };
  statistics: {
    viewCount: string;
    subscriberCount: string;
    videoCount: string;
  };
  brandingSettings: { image: { bannerExternalUrl: string } };
}

const SingleChannel = () => {
  const { channelId } = useParams();
  const [channelDetails, setChannelDetails] = useState<ChannelType | null>(
    null
  );

  const [videos, setVideos] = useState<VideoItemType[]>([]);

  useEffect(() => {
    makeRequest(`channels?part=snippet,statistics&id=${channelId}`).then(
      (data) => setChannelDetails(data.items[0])
    );
    makeRequest(
      `search?channelId=${channelId}&part=snippet%2Cid&order=date`
    ).then((data) => setVideos(data.items));
  });

  if (!channelDetails) return "Loading...";

  return (
    <>
      <Header />
      <Box
        sx={{
          p: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "25px",
          alignItems: "center",
        }}
      >
        <img
          src={channelDetails.brandingSettings.image.bannerExternalUrl}
          style={{
            width: "90%",
            height: "200px",
            objectFit: "cover",
            margin: "0 auto",
            borderRadius: "15px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
          }}
        />

        <Box
          sx={{
            display: "flex",
            gap: "15px",
            width: "90%",
          }}
        >
          <Box
            sx={{
              width: "200px",
              height: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={channelDetails.snippet.thumbnails.high.url}
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "55%",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "700" }}>
              {channelDetails.snippet.title}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <Typography sx={{ color: "grey", fontSize: "14px" }}>
                {channelDetails.snippet.customUrl}
              </Typography>
              <Typography sx={{ color: "grey", fontSize: "14px" }}>
                {defineSubscribers(channelDetails.statistics.subscriberCount)}
              </Typography>
              <Typography sx={{ color: "grey", fontSize: "14px" }}>
                {`${channelDetails.statistics.videoCount} videos`}
              </Typography>
            </Box>
            <Typography>
              {channelDetails.snippet.description.length > 250
                ? channelDetails.snippet.description.slice(0, 250) + "..."
                : channelDetails.snippet.description}
            </Typography>
            <button
              style={{
                width: "fit-content",
                padding: "8px 16px",
                borderRadius: "8.5px",
                border: "none",
                fontFamily: "Roboto Condensed, sans-serif",
                letterSpacing: "2px",
                fontWeight: "bold",
                color: "#fff",
                backgroundColor: "black",
              }}
            >
              Subscribe
            </button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "15px",
          p: "15px",
          width: "90%",
          margin: "0 auto",
        }}
      >
        {videos &&
          videos.map((video) => <VideoCard type="nonRelative" item={video} />)}
      </Box>
    </>
  );
};

export default SingleChannel;
