"use client";

import React, { useRef } from "react";
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
      className="no-scrollbar bg-[#FFFFFF33] rounded-custom min-w-[296px] min-h-[221px] max-h-[280px] max-w-[320px] overflow-y-scroll py-10 px-6"
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
            <AnimatedText word={quote.replace(/(?<=\w)\?(?=\w)/g, "'")} />
          )}
        </>

        <p className="text-sm font-light text-primary">
          - {author?.split(",")[0]}
        </p>
        <p className={"text-sm text-gray-300/60 "}>
          <span className="font-semibold">Tag: </span>
          {tags?.split(",")[0]}
        </p>
      </div>
    </div>
  );
};

export default Card;
