"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
export const AnimatedText = ({
  word,
  className,
}: {
  word: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const words = word.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.1),
      }
    );
  }, [animate, word]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {words.map((word, idx) => {
          return (
            <motion.span key={word + idx} className="text-white text-base leading-6 font-light break-words">
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-regular", className)}>
      <div className="mt-4">
        <div className=" text-white leading-snug tracking-wide">
          <>{renderWords() as unknown as string}</>
        </div>
      </div>
    </div>
  );
};
