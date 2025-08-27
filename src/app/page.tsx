import ContactForm from "@/components/contactForm";
import Content from "@/components/content";
import FaqContainer from "@/components/faqContainer";
import Footer from "@/components/footer";
import Header from "@/components/header";
import RiseUpComponent from "@/components/riseUpComponent";
import SlideInComponent from "@/components/slideInComponent";
import loadFaqs from "@/lib/loadFaqs";
import { CallEnd } from "@mui/icons-material";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  const faqs = loadFaqs();
  return (
    <>
      <Header hidden />
      <Box
        component={"main"}
        maxWidth={"1200px"}
        m={"auto"}
        p={"0 20px"}
        pb={"10px"}
        display={"flex"}
        flexDirection={"column"}
        gap={"80px"}
      >
        <RiseUpComponent>
          <Box
            minHeight={"100vh"}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image
              src={"/logo.png"}
              width={150}
              height={150}
              alt="logo"
              style={{
                width: "clamp(100px, 10vw, 150px)",
                height: "clamp(100px, 10vw, 150px)",
              }}
            />
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"40px"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Typography
                variant="h1"
                sx={{ fontWeight: 500, textAlign: "center" }}
              >
                Expense Tracker For M-Pesa
              </Typography>
              <SlideInComponent delay={0.2}>
                <Typography
                  maxWidth={"700px"}
                  textAlign={"center"}
                  color="text.secondary"
                  sx={{
                    fontSize: "clamp(1rem, 2vw, 1.2rem)",
                    letterSpacing: "0.1em",
                  }}
                >
                  Track your expenses, manage your budgets, and gain insights
                  into your financial habits — all in one simple, powerful app.
                </Typography>
              </SlideInComponent>
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
        </RiseUpComponent>
        <SlideInComponent>
          <Content
            title="Track your spending with ease"
            description="Easily track expenses from M-pesa messages and M-pesa statements. Whether it’s transport, groceries, or a subscription, our intuitive design makes keeping track of your money effortless."
            image="/pic1.png"
          />
        </SlideInComponent>
        <RiseUpComponent>
          <Content
            reverse
            title="View insights on your expenses"
            description="See where your money really goes with detailed statistics and visual breakdowns. Spot spending trends, compare categories, and make informed financial decisions."
            image="/pic2.png"
            color="secondary.main"
          />
        </RiseUpComponent>
        <SlideInComponent>
          <Content
            title="Automatically track budgets"
            description="Set budgets for categories like food, travel, or entertainment — and let the app do the tracking. Get notified before you overspend and stay on top of your goals."
            image="/pic3.png"
            color="secondary.light"
          />
        </SlideInComponent>
        <RiseUpComponent>
          <Content
            reverse
            title="Customize your expenses"
            description="Add personalized labels and recipients to each transaction. Whether it’s “Dinner with Sarah” or “Uber Ride,” detailed records make it easier to understand and reflect on your spending habits."
            image="/pic4.png"
          />
        </RiseUpComponent>
        <SlideInComponent>
          <Content
            title="Search, Export and much more"
            description="Quickly find past expenses with powerful search tools, export your data for safekeeping, and look forward to many more features as we continue to grow and improve the app."
            image="/pic5.png"
            color="secondary.main"
          />
        </SlideInComponent>
        <Typography variant="h1">FAQs</Typography>
        <FaqContainer faqs={faqs} />
        <ContactForm />
        <Footer />
      </Box>
    </>
  );
};

export default Home;

export const metadata: Metadata = {
  title: "Expense tracker",
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
    title: "Expense tracker",
    description:
      "Track your expenses, manage your budgets, and gain insights into your financial habits — all in one simple, powerful app.",
    url: process.env.HOME_URL,
    siteName: "Expense tracker",
    images: [
      {
        url: process.env.HOME_URL + "/logo.png",
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
    title: "Expense Tracker for M-pesa",
    description:
      "Track your expenses, manage your budgets, and gain insights into your financial habits — all in one simple, powerful app.",
    images: [process.env.HOME_URL + "/logo.png"],
  },
};
