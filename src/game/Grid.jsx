import React, { useState } from 'react';
import { motion } from 'framer-motion';
import bomb from '../assets/boom.png';
import diamond from '../assets/diamond2.png';

const Grid = () => {
  const [grid, setGrid] = useState(createGrid());
  const [money, setMoney] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Initialize grid with diamonds in every cell except one random bomb
  function createGrid() {
    const grid = Array.from({ length: 25 }, () => ({ type: 'diamond', revealed: false }));

    // Place a single bomb in a random position
    const bombIndex = Math.floor(Math.random() * 25);
    grid[bombIndex] = { type: 'bomb', revealed: false };

    return grid;
  }

  const handleBoxClick = (index) => {
    if (gameOver || grid[index].revealed) return;

    const newGrid = [...grid];
    newGrid[index] = { ...newGrid[index], revealed: true };

    if (newGrid[index].type === 'bomb') {
      setGameOver(true);
    } else if (newGrid[index].type === 'diamond') {
      setMoney(money + 10);
    }

    setGrid(newGrid);
  };

  const resetGame = () => {
    setGrid(createGrid());
    setMoney(0);
    setGameOver(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white w-full">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Diamond Collector Game</h1>
      {/* <p className="text-lg md:text-xl mb-4">Money: ${money}</p> */}

      <div className="grid grid-cols-5 gap-1 sm:gap-2">
        {grid.map((box, index) => (
          <motion.div
            key={index}
            className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 ${box.revealed ?"bg-gray-950":"bg-gray-700"}  ${box.revealed?"":"hover:bg-gray-600 "}  duration-150 rounded-lg flex items-center justify-center cursor-pointer shadow-lg hover:shadow-2xl transition-shadow `}
            whileHover={{ y: box.revealed?"":"-5px"}}
            whileTap={{ scale: 0.9 }}
            style={{
                boxShadow: box.revealed?"":"0 5px 1px #2d2b27"
            }}
            onClick={() => handleBoxClick(index)}
          >
            {box.revealed && (
              <span className="text-base sm:text-lg md:text-xl">
                {box.type === 'diamond' ? (
                  <motion.img src={diamond} alt="Diamond" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" 
                  
                  initial={{ opacity: 1, scale: 0 }}
                   animate={{ opacity: 1, scale: 1 }}
                   />
                ) : box.type === 'bomb' ? (
                  <img src={bomb} alt="Bomb" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                ) : ''}
              </span>
            )}
          </motion.div>
        ))}
      </div>

      {gameOver && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center px-4">
          <motion.div
            className="text-black p-4 sm:p-6 w-full max-w-xs sm:max-w-md md:max-w-lg flex items-center flex-col rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img src={bomb} alt="Bomb" className="w-32 sm:w-40 md:w-48" />
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Oops! Game Over..</h2>
            <button
              onClick={resetGame}
              className="bg-green-400 text-black font-bold px-4 py-2 rounded hover:bg-green-700 text-sm sm:text-base md:text-lg"
            >
              Play Again
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Grid;
