import Content from "@/components/content";
import FaqContainer from "@/components/faqContainer";
import Footer from "@/components/footer";
import Header from "@/components/header";
import loadFaqs from "@/lib/loadFaqs";
import { CallEnd } from "@mui/icons-material";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  const faqs = loadFaqs();
  return (
    <>
      <Header hidden />
      <Box
        maxWidth={"1200px"}
        m={"auto"}
        p={"0 20px"}
        pb={"10px"}
        display={"flex"}
        flexDirection={"column"}
        gap={"80px"}
      >
        <Box
          minHeight={"90vh"}
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image src={"/logo.png"} width={150} height={150} alt="logo" />
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"40px"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography variant="h1" sx={{ fontWeight: 500 }}>
              Expense Tracker For M-Pesa
            </Typography>
            <Typography
              maxWidth={"700px"}
              textAlign={"center"}
              color="text.secondary"
              sx={{
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                letterSpacing: "0.1em",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Link href={"/"}>
              <Button
                variant="contained"
                size="large"
                startIcon={
                  <Image
                    src={"/playstore.png"}
                    width={30}
                    height={30}
                    alt="playstore logo"
                  />
                }
              >
                Download on Playstore
              </Button>
            </Link>
          </Box>
        </Box>
        <Content
          title="Track your spending with ease"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          image="/pic.jpeg"
        />
        <Content
          reverse
          title="View insights on your expenses"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          image="/pic.jpeg"
          color="secondary.main"
        />
        <Content
          title="Automatically track budgets"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          image="/pic.jpeg"
          color="secondary.light"
        />
        <Content
          reverse
          title="Customize your expenses"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          image="/pic.jpeg"
        />
        <Content
          title="Search, Export and much more"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          image="/pic.jpeg"
          color="secondary.main"
        />
        <Typography variant="h1">FAQs</Typography>
        <FaqContainer faqs={faqs} />
        <Box
          padding={"40px 20px"}
          borderRadius={"20px"}
          bgcolor={"secondary.main"}
          display={"flex"}
          gap={"20px"}
        >
          {
            //@ts-ignore
            <form style={{ width: "100%", paddingBottom: "30px" }} netlify>
              <Grid
                sx={{
                  width: "100%",
                  maxWidth: "900px",
                  margin: "0 auto",
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                  gridTemplateAreas: {
                    xs: `"content" "form" "button"`,
                    md: `"content form" "button form"`,
                  },
                  gap: "30px",
                  color: "black",
                }}
              >
                <Box
                  gridArea={"content"}
                  display={"flex"}
                  flexDirection={"column"}
                  height={"100%"}
                  justifyContent={"flex-end"}
                  gap={"20px"}
                >
                  <Typography
                    variant="h1"
                    sx={{ color: "black", fontWeight: 500 }}
                  >
                    Contact Us
                  </Typography>
                  <Typography sx={{ color: "black", letterSpacing: "0.1em" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </Typography>
                </Box>
                <Box
                  gridArea={"form"}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"20px"}
                >
                  <TextField
                    required
                    color="info"
                    label="Name"
                    name="name"
                    placeholder="Your Name"
                    sx={{
                      input: {
                        color: "black",
                      },
                      "& .MuiOutlinedInput-root": {
                        fieldset: {
                          borderColor: "black",
                        },
                        "&:hover fieldset": {
                          borderColor: "black",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "black",
                        },
                      },
                    }}
                  />
                  <TextField
                    required
                    color="info"
                    label="Email"
                    name="email"
                    placeholder="Your Email"
                    sx={{
                      input: {
                        color: "black",
                      },
                      "& .MuiOutlinedInput-root": {
                        fieldset: {
                          borderColor: "black",
                        },
                        "&:hover fieldset": {
                          borderColor: "black",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "black",
                        },
                      },
                    }}
                  />
                  <TextField
                    variant="outlined"
                    color="info"
                    label="Message"
                    placeholder="Message"
                    name="message"
                    multiline
                    rows={5}
                    sx={{
                      textarea: {
                        color: "black",
                      },
                      "& .MuiOutlinedInput-root": {
                        fieldset: {
                          borderColor: "black",
                        },
                        "&:hover fieldset": {
                          borderColor: "black",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "black",
                        },
                      },
                    }}
                  />
                </Box>
                <Box gridArea={"button"}>
                  <Button
                    type="submit"
                    variant="contained"
                    disableElevation
                    startIcon={<CallEnd />}
                    color="info"
                  >
                    Contact Us
                  </Button>
                </Box>
              </Grid>
            </form>
          }
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Home;
