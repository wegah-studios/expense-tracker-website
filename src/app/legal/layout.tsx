import Footer from "@/components/footer";
import Header from "@/components/header";
import { Box } from "@mui/material";
import React from "react";

const LegalLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Box>
      <Header />
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
        {children}
        <Footer />
      </Box>
    </Box>
  );
};

export default LegalLayout;
