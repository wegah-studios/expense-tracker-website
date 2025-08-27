"use client";

import React, { useState } from "react";
import RiseUpComponent from "./riseUpComponent";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import SlideInComponent from "./slideInComponent";
import { CallEnd, Mail } from "@mui/icons-material";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = new URLSearchParams(
      Array.from(formData.entries()) as [string, string][]
    ).toString();
    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <RiseUpComponent>
      <Box
        id="contact"
        component={"section"}
        padding={"40px 20px"}
        borderRadius={"20px"}
        bgcolor={"secondary.main"}
        display={"flex"}
        gap={"20px"}
      >
        {submitted ? (
          <Box
            flex={1}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"10px"}
          >
            <Mail sx={{ color: "black", fontSize: "clamp(2rem, 4vw, 4rem)" }} />
            <Typography variant="h2" sx={{ color: "black" }}>
              Message Sent
            </Typography>
            <Button
              color="info"
              variant="outlined"
              onClick={() => setSubmitted(false)}
            >
              Send another message
            </Button>
          </Box>
        ) : (
          <form
            onSubmit={handleFormSubmit}
            style={{ width: "100%", paddingBottom: "30px" }}
          >
            <Grid
              sx={{
                width: "100%",
                maxWidth: "900px",
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gridTemplateAreas: {
                  xs: `"content" "form" "button"`,
                  sm: `"content form" "button form"`,
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
                <RiseUpComponent>
                  <Typography
                    variant="h1"
                    sx={{ color: "black", fontWeight: 500 }}
                  >
                    Contact Us
                  </Typography>
                </RiseUpComponent>
                <RiseUpComponent delay={0.2}>
                  <Typography sx={{ color: "black", letterSpacing: "0.1em" }}>
                    Reach out to us with feedback or inquiries on the app.
                  </Typography>
                </RiseUpComponent>
              </Box>
              <Box
                gridArea={"form"}
                display={"flex"}
                flexDirection={"column"}
                gap={"20px"}
              >
                <SlideInComponent>
                  <TextField
                    fullWidth
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
                </SlideInComponent>
                <SlideInComponent delay={0.2}>
                  <TextField
                    fullWidth
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
                </SlideInComponent>
                <SlideInComponent delay={0.3}>
                  <TextField
                    fullWidth
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
                </SlideInComponent>
              </Box>
              <Box gridArea={"button"}>
                <SlideInComponent delay={0.3}>
                  <Button
                    type="submit"
                    variant="contained"
                    disableElevation
                    startIcon={<CallEnd />}
                    color="info"
                  >
                    Contact Us
                  </Button>
                </SlideInComponent>
              </Box>
            </Grid>
          </form>
        )}
      </Box>
    </RiseUpComponent>
  );
};

export default ContactForm;
