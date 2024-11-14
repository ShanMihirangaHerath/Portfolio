import React from "react";
import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      {/* Diagonal Gradient Layer */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 opacity-80"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Shapes Layer */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full z-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeIn" }}
      >
        <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-white rounded-full blur-xl opacity-50 animate-bounce"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-blue-400 rounded-full blur-2xl opacity-60 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/5 w-16 h-16 bg-yellow-300 rounded-lg rotate-45 blur-md opacity-40 animate-spin-slow"></div>
      </motion.div>

      {/* Existing Layers */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-white"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-blue-800"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-black"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
      />
    </>
  );
};

export default TransitionEffect;
