import loadLegalDocumentation from "@/lib/loadLegalDocumentation";
import { Box, Paper, Typography } from "@mui/material";
import { Metadata } from "next";
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
        {documentation.map(({ title, description }, index) => (
          <Box
            key={index}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
          >
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

export const metadata: Metadata = {
  title: "Privacy Policy | Expense tracker",
  description:
    "Track your expenses, manage your budgets, and gain insights into your financial habits — all in one simple, powerful app.",
  keywords: [
    "wegah",
    "wegah studios",
    "kenya",
    "tech",
    "software",
    "software tools",
    "mobile apps",
    "websites",
    "m-pesa",
    "expenses",
    "tracker",
  ],
  openGraph: {
    title: "Privacy Policy | Expense tracker",
    description:
      "Track your expenses, manage your budgets, and gain insights into your financial habits — all in one simple, powerful app.",
    url: "https://yourdomain.com",
    siteName: "Expense tracker",
    images: [
      {
        url: "https://yourdomain.com/promo.png",
        width: 1440,
        height: 1024,
        alt: "Expense Tracker",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Expense tracker for M-pesa",
    description:
      "Track your expenses, manage your budgets, and gain insights into your financial habits — all in one simple, powerful app.",
    images: ["https://yourdomain.com/promo.png"],
  },
};