import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import SingleVideoContent from "../components/SingleVideoContent";
import RelativeVideos from "../components/RelativeVideos";
import { useEffect, useState } from "react";

const SingleVideo = () => {
  const { videoId } = useParams();
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleScreenSize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, [screenSize]);

  if (!videoId) return null;

  return (
    <div>
      <Header />
      <main
        style={{
          display: "flex",
          gap: "15px",
          flexDirection: screenSize > 1150 ? "row" : "column",
          justifyContent: "space-between",
        }}
      >
        <SingleVideoContent videoId={videoId} />
        <RelativeVideos videoId={videoId} />
      </main>
    </div>
  );
};

export default SingleVideo;
