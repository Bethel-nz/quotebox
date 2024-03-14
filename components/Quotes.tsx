"use client";

import React from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import Card from "./Card";
import { Loader } from "lucide-react";

const Quotes = () => {
  const { data, error } = useSWR("/api/quote", fetcher, {
    refreshInterval: 5000000,
  });


  if (!data?.data?.length) return <Loader size={40} color="white" className="animate-spin mr-2" />;
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
