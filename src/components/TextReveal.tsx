'use client'
import { motion, MotionValue, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function ScrollFadeText({ text }: { text: string }) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Break text into characters
  const characters = text.split(" ")

  return (
    <motion.span ref={containerRef} className="flex flex-wrap whitespace-pre-wrap">
        {characters.map((char, i) => {
            const len = characters.length;
            const init = (Math.round((i / len) * 100)/100);
            const start = init - 0.2;
            const initEnd = init - 0.1;
            const end = initEnd; // adjust fade length (smaller = faster fade)
            return (
              <span
                key={i}
              >
                <TextReveal
                    char={char}
                    i={i}
                    scrollYProgress={scrollYProgress}
                    start={start}
                    end={end}
                />
                <span>{" "}</span>
              </span>
          )
        })}
    </motion.span>
  )
}

const TextReveal = ({
  char,
  i,
  scrollYProgress,
  start,
  end,
}: {
  char: string
  i: number,
  scrollYProgress: MotionValue<number>,
  start: number,
  end: number,
}) => {
    const rawOpacity = useTransform(scrollYProgress, [start, end], [0.4, 1], { clamp: false })

    // Clamp manually so it stays visible once passed
    const opacity = useTransform(rawOpacity, value => Math.min(value, 1))
    return (
        <span className="relative">
          <span className="absolute whitespace-pre opacity-10">
            {char}
          </span>
          <motion.span
              key={i}
              style={{ opacity }}
              className="whitespace-pre"
          >
              {char}
          </motion.span>
        </span>
    )
}