import loadLegalDocumentation from "@/lib/loadLegalDocumentation";
import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const PrivacyPolicy = () => {
  const documentation = loadLegalDocumentation("privacy-policy");
  return (
    <Box
      pt={"50px"}
      minHeight={"90vh"}
      display={"flex"}
      flexDirection={"column"}
      gap={"50px"}
    >
      <Typography variant="h1">Privacy Policy</Typography>
      <Paper
        variant="outlined"
        sx={{
          padding: "30px 20px",
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          borderRadius: "30px",
        }}
      >
        {documentation.map(({ title, description }) => (
          <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
            <Typography variant="h2" sx={{ fontWeight: 500 }}>
              {title}
            </Typography>
            <Typography sx={{ letterSpacing: "0.1em", lineHeight: "30px" }}>
              {description}
            </Typography>
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default PrivacyPolicy;
