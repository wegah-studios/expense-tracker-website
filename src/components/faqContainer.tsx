"use client";

import loadFaqs from "@/lib/loadFaqs";
import { Box } from "@mui/material";
import React, { useState } from "react";
import FaqItem from "./faqItem";
import { FAQ } from "@/types/common";

const FaqContainer = ({ faqs }: { faqs: FAQ[] }) => {
  const [open, setOpen] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
      {faqs.map(({ question, answer }, index) => (
        <FaqItem
          key={index}
          {...{
            index,
            question,
            answer,
            open: open === index,
            onClick: handleClick,
          }}
        />
      ))}
    </Box>
  );
};

export default FaqContainer;
