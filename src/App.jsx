import React, { useState } from 'react';
import PlayerList from './components/PlayerList';
import Bank from './components/Bank';
import PropertyManager from './components/PropertyManager';
import CardDeck from './components/CardDeck';
import HomePage from './components/HomePage';
import { AnimatePresence, motion } from 'framer-motion';

// Monopoly color palette
const monopolyColors = {
  primary: '#26532B', // Dark green
  secondary: '#D4AF37', // Gold
  accent: '#C41E3A', // Red
  background: '#FFF8E8', // Cream
  property: '#4A6FA5', // Blue
};

function App() {
  const [entered, setEntered] = useState(false);
  const [players, setPlayers] = useState([]);

  return (
    <div 
      className="min-h-screen w-full overflow-x-hidden"
      style={{
        backgroundColor: monopolyColors.background,
        backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(210, 180, 140, 0.1) 0%, transparent 20%)',
      }}
    >
      <AnimatePresence mode="wait">
        {!entered ? (
          <motion.div
            key="home"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <HomePage onEnter={() => setEntered(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="px-4 py-6 md:px-6 lg:px-8 max-w-6xl mx-auto"
          >
            {/* Enhanced Header */}
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-6 md:mb-8 text-center"
            >
              <h1 
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 px-2" 
                style={{ 
                  color: monopolyColors.primary,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                }}
              >
                Monopoly Deluxe Companion
              </h1>
              <div 
                className="h-1 w-16 sm:w-20 md:w-24 mx-auto mb-3 md:mb-4" 
                style={{ backgroundColor: monopolyColors.secondary }}
              ></div>
              <p className="text-sm sm:text-base text-gray-600 italic px-2">
                Your digital assistant for the ultimate Monopoly experience
              </p>
            </motion.div>

            {/* Responsive Game Components Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              <motion.div 
                className="bg-white p-4 sm:p-5 md:p-6 rounded-lg md:rounded-xl shadow-md md:shadow-lg"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{ borderTop: `4px solid ${monopolyColors.property}` }}
              >
                <PlayerList players={players} setPlayers={setPlayers} />
              </motion.div>

              <motion.div 
                className="bg-white p-4 sm:p-5 md:p-6 rounded-lg md:rounded-xl shadow-md md:shadow-lg"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                style={{ borderTop: `4px solid ${monopolyColors.secondary}` }}
              >
                <Bank players={players} setPlayers={setPlayers} />
              </motion.div>

              <motion.div 
                className="bg-white p-4 sm:p-5 md:p-6 rounded-lg md:rounded-xl shadow-md md:shadow-lg sm:col-span-2 overflow-x-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{ borderTop: `4px solid ${monopolyColors.accent}` }}
              >
                <div className="min-w-fit">
                  <PropertyManager players={players} />
                </div>
              </motion.div>

              <motion.div 
                className="bg-white p-4 sm:p-5 md:p-6 rounded-lg md:rounded-xl shadow-md md:shadow-lg sm:col-span-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                style={{ borderTop: `4px solid ${monopolyColors.primary}` }}
              >
                <CardDeck />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;