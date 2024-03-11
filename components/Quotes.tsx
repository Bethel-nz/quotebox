"use client";

import React, { useRef } from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { AnimatedText } from "./AnimatedText";
import Image from "next/image";
import { downloadImage } from "@/lib/downlod";
import Card from "./Card";

const Quotes = () => {
  const { data, error } = useSWR("/api/quote", fetcher, {
    refreshInterval: 3000000,
  });

  console.log(data);

  if (!data) return "Loading...";
  if (error) return "Error";

  return (
    <div className="flex gap-10 items-center justify-center">
      {data?.data?.map((data: QuoteProps, index: number) => (
        <Card key={index} data={data} />
      ))}
    </div>
  );
};

export default Quotes;
