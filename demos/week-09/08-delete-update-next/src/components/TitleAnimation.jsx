//animations are client side
"use client";

//import motion to apply animations to elements
import { motion } from "motion/react";

export default function TitleAnimation() {
  //we will wrap any element we want to animate within motion
  //we can apply properties to the motion element to build an animation

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 6 }}
    >
      <h1>Rollercoasters! Hooray!</h1>
      <h2>Explore the best rollercoasters in the world</h2>
    </motion.div>
  );
}
