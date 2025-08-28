"use client";

import { Box } from "@mui/material";
import React, { useState } from "react";
import FaqItem from "./faqItem";
import { FAQ } from "@/types/common";
import SlideInComponent from "./slideInComponent";

const FaqContainer = ({ faqs }: { faqs: FAQ[] }) => {
  const [open, setOpen] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <>
      {faqs.map(({ question, answer }, index) => (
        <SlideInComponent key={index} delay={index / 10} width={"100%"}>
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
        </SlideInComponent>
      ))}
    </>
  );
};

export default FaqContainer;
