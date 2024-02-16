import { FC, useContext } from "react";
import { CategoryType } from "../../utils/constants";
import { Box, Typography } from "@mui/material";
import Context from "../../utils/Context";

const CategoryTemplate: FC<{
  item: CategoryType;
}> = ({ item }) => {
  const getContext = useContext(Context);
  if (!getContext) return null;

  const { setSelectedCategory, selectedCategory } = getContext;
  const handlePickCategory = (title: string) => {
    setSelectedCategory(title);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        border: `1px solid ${
          selectedCategory === item.title ? "#0d8b8b" : "#fff"
        }`,
        p: "5px",
        borderRadius: "5px",
        transition: "all ease-in-out 0.25s",
        backgroundColor: selectedCategory === item.title ? "#0d8b8b" : "#fff",
        color: selectedCategory === item.title ? "#fff" : "",
        ":hover": {
          cursor: "pointer",
          backgroundColor: "#0d8b8b",
          border: "1px solid #0d8b8b",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
          color: "#Fff",
        },
      }}
      onClick={() => handlePickCategory(item.title)}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0d8b8b",
          color: "#fff",
          p: "2.5px",
        }}
      >
        <item.icon />
      </Box>
      <Typography>{item.title}</Typography>
    </Box>
  );
};

export default CategoryTemplate;
