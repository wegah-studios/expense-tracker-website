"use client";

import { Box, Button, Paper, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = ({ hidden = false }: { hidden?: boolean }) => {
  const [show, setShow] = useState<boolean>(!hidden);

  useEffect(() => {
    if (hidden) {
      document.addEventListener("scroll", (e) => {
        setShow((prev) => {
          const shouldShow = window.scrollY > 600;
          if (prev !== shouldShow) {
            return shouldShow;
          }
          return prev;
        });
      });

      return () => document.removeEventListener("scroll", () => {});
    }
  }, []);

  return (
    <Paper
      sx={{
        opacity: show ? 1 : 0,
        position: "sticky",
        top: 0,
        padding: "10px 20px",
        zIndex: 1000,
        borderRadius: "0px",
        transition: "opacity 0.2s ease",
        border: "none",
      }}
      variant="outlined"
    >
      <Box
        maxWidth={"1200px"}
        m={"auto"}
        p={"0 20px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Link
          href={"/"}
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box
            bgcolor={"info.main"}
            sx={{ borderRadius: "10px", width: "40px", height: "40px" }}
          >
            <Image src={"/logo.png"} alt="logo" width={40} height={40} />
          </Box>
          <Typography
            sx={{ fontWeight: 500, fontSize: "clamp(1rem, 2vw, 2rem)" }}
          >
            Expense Tracker
          </Typography>
        </Link>
        <Button
          variant="contained"
          startIcon={
            <Image
              src={"/playstore.png"}
              width={20}
              height={20}
              alt="playstore logo"
            />
          }
          size="small"
        >
          Download
        </Button>
      </Box>
    </Paper>
  );
};

export default Header;
