"use client";

import React, { useRef } from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { AnimatedText } from "./AnimatedText";
import Image from "next/image";
import { downloadImage } from "@/lib/downlod";

const Card = ({ data }: { data: QuoteProps }) => {
  const cardRef = useRef(null);

  const handleDownloadImage = () => {
    downloadImage(cardRef, "quote_image.png");
  };

  const { quote, tags, author } = data;

  return (
    <div
      ref={cardRef}
      className="bg-[#FFFFFF33]  rounded-[50px] min-w-[296px] min-h-[221px] max-w-[320px] py-10 px-6"
    >
      <div className="flex flex-col space-y-3 text-white transition-all ease-in-out">
        <Image
          src={"/assets/images/quote.svg"}
          alt="quote"
          width={28}
          height={24}
          onClick={handleDownloadImage}
          priority
        />
        <>
          {quote && (
            <AnimatedText word={quote?.replace(/(?<=\w)\?(?=\w)/g, "'")} />
          )}
        </>

        <p className="text-sm leading-[21px] font-light text-[#FFF3B0]">
          - {author?.split(",")[0]}
        </p>
        <p className={"text-sm text-gray-300/60 "}>
          Tag: {tags?.split(",")[0]}
        </p>
      </div>
    </div>
  );
};

export default Card;
