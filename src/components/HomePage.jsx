// src/components/HomePage.jsx
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomePage({ onEnter }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onEnter(); // Go to main app after 3 sec
    }, 3000);
    return () => clearTimeout(timer);
  }, [onEnter]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-yellow-100 to-red-100">
      <AnimatePresence>
        <motion.div
          className="p-6 bg-white shadow-xl rounded-2xl text-center"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src="/game/logo.png"
            alt="Monopoly Deluxe"
            className="w-64 mx-auto mb-4"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
          <motion.h1
            className="text-2xl font-bold"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Welcome to Monopoly Deluxe Companion
          </motion.h1>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
