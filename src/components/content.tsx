import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Content = ({
  reverse = false,
  title,
  description,
  image,
  color = "primary.main",
}: {
  reverse?: boolean;
  title: string;
  description: string;
  image: string;
  color?: "primary.main" | "secondary.main" | "secondary.light";
}) => {
  return (
    <Box
      padding={"40px 20px"}
      borderRadius={"20px"}
      bgcolor={color}
      display={"flex"}
      gap={"20px"}
      flexDirection={reverse ? "row-reverse" : "row"}
    >
      <Box flex={1} display={"flex"} alignItems={"center"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
          maxWidth={"450px"}
          m={"0 auto"}
        >
          <Typography variant="h1" sx={{ color: "black", fontWeight: 500 }}>
            {title}
          </Typography>
          <Typography sx={{ color: "black", letterSpacing: "0.1em" }}>{description}</Typography>
        </Box>
      </Box>
      <Box flex={1}>
        <Box
          position={"relative"}
          maxWidth={"400px"}
          m={"0 auto"}
          sx={{
            aspectRatio: "1.2/1",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Content;
