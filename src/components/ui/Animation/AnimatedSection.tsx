// アニメーションライブラリ
import { motion } from "framer-motion";
// 共通型定義
import type { AnimatedSectionProps } from "../../../types";

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) => {
  // アニメーションパラメータの定数定義
  const ANIMATION_OFFSET = 50;
  const ANIMATION_SCALE_START = 0.8;

  const variants = {
    hidden: {
      opacity: 0,
      y:
        direction === "up"
          ? ANIMATION_OFFSET
          : direction === "down"
          ? -ANIMATION_OFFSET
          : 0,
      x:
        direction === "left"
          ? ANIMATION_OFFSET
          : direction === "right"
          ? -ANIMATION_OFFSET
          : 0,
      scale: direction === "scale" ? ANIMATION_SCALE_START : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
    },
  };

  const transition = {
    duration: 0.4,
    delay: delay,
  };
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
