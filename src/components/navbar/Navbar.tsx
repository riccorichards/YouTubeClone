import { Box } from "@mui/material";
import { videoCategories } from "../../utils/constants";
import CategoryTemplate from "./CategoryTemplate";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);
  const [start, setStart] = useState<number>(0);
  const displayAmount = defineNavItems(screenSize);

  //for responsive
  useEffect(() => {
    const handleScreenSize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, [screenSize]);

  function defineNavItems(screenSize: number) {
    if (screenSize > 750) {
      return Math.max(Math.round(screenSize / 100 - 3), 1);
    } else {
      return Math.max(Math.round(screenSize / 100 - 2), 1);
    }
  }

  const slicedCategories = () =>
    videoCategories.slice(start, start + displayAmount);

  const slide = (direction: "next" | "prev") => {
    setStart((prevStart) => {
      if (direction === "next") {
        const maxStartIndex = videoCategories.length - displayAmount;
        return Math.min(prevStart + displayAmount, maxStartIndex);
      } else {
        return Math.max(prevStart - displayAmount, 0);
      }
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        m: "15px",
      }}
    >
      {start > 0 && (
        <Box
          sx={{
            position: "absolute",
            left: "0",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ":active": { transform: "scale(0.95)" },
          }}
          onClick={() => slide("prev")}
        >
          <ArrowBackIosIcon />
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        {slicedCategories().map((item) => (
          <CategoryTemplate key={item.title} item={item} />
        ))}
      </Box>
      {start + displayAmount < videoCategories.length && (
        <Box
          sx={{
            position: "absolute",
            right: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            ":active": { transform: "scale(0.95)" },
          }}
          onClick={() => slide("next")}
        >
          <ArrowForwardIosIcon />
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
