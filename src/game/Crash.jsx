import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, LinearScale, PointElement, CategoryScale, Filler } from 'chart.js';
import 'tailwindcss/tailwind.css';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from 'react-modal';

ChartJS.register(LineElement, LinearScale, PointElement, CategoryScale, Filler);


const CustomModal = ({ showModal, closeModal, modalColor, modalMessage }) => {
    return (
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className={`relative bg-${modalColor}-500 p-6 rounded-lg shadow-lg text-center`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4">{modalMessage}</h2>
              <button
                onClick={closeModal}
                className="bg-white text-black font-bold py-2 px-4 rounded-lg"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

const Crash = () => {
  const [multiplier, setMultiplier] = useState(0);
  const [isCrashed, setIsCrashed] = useState(false);
  const [betAmount, setBetAmount] = useState(0);
  const [cashoutAt, setCashoutAt] = useState(2.0);
  const [isBetPlaced, setIsBetPlaced] = useState(false);
  const [profitOnWin, setProfitOnWin] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalColor, setModalColor] = useState('');

  const maxMultiplier = 50; // Adjusted max crash point value
  const [crashPoint, setCrashPoint] = useState(Math.random() * (maxMultiplier - 1) + 1); // Random crash point between 1 and maxMultiplier

  const curvePoints = Array.from({ length: 201 }, (_, i) => {
    const x = (i / 200) * maxMultiplier;
    return { x, y: Math.pow(x / 5, 2) };
  });

  const [data, setData] = useState({
    labels: curvePoints.map(point => point.x),
    datasets: [{
      label: 'Rocket Path',
      data: [{ x: 0, y: 0 }],
      borderColor: '#FF8C00',
      backgroundColor: 'rgba(0, 255, 0, 0.3)', // Start with green
      fill: true,
      borderWidth: 2,
      pointBackgroundColor: '#FF8C00',
      pointBorderColor: '#FF8C00',
      pointRadius: 0,
      pointHoverRadius: 0,
    }],
  });

  useEffect(() => {
    let interval;
    if (!isCrashed && isBetPlaced) {
      interval = setInterval(() => {
        if (multiplier < crashPoint) {
          const newMultiplier = Math.min(multiplier + 0.1, crashPoint); // Continue until crash point
          setMultiplier(newMultiplier);
          setData(prevData => ({
            ...prevData,
            datasets: [{
              ...prevData.datasets[0],
              data: [
                { x: 0, y: 0 }, // Keep origin point
                ...curvePoints.filter(point => point.x <= newMultiplier),
              ],
            }],
          }));

          if (newMultiplier >= cashoutAt) {
            setProfitOnWin(betAmount * cashoutAt);
            setIsBetPlaced(false);
            setShowModal(true);
            setModalMessage(`Congratulations! You won ${profitOnWin.toFixed(2)}!`);
            setModalColor('green');

            // Change the background gradient to green
            document.body.style.background = 'linear-gradient(to bottom, green 20%, black 80%)';
          }
        } else {
          setIsCrashed(true);
          setIsBetPlaced(false);
          setShowModal(true);
          setModalMessage(`Oops! Try again. Crash point was ${crashPoint.toFixed(2)}`);
          setModalColor('red');

          // Change the curve to red on crash
          setData(prevData => ({
            ...prevData,
            datasets: [{
              ...prevData.datasets[0],
              backgroundColor: 'rgba(255, 0, 0, 0.3)', // Change to red on crash
            }],
          }));

          // Change the background gradient to red
          document.body.style.background = 'linear-gradient(to bottom, red 20%, black 80%)';
          clearInterval(interval);
        }
      }, 100);
    }

    return () => clearInterval(interval);
  }, [multiplier, isCrashed, isBetPlaced, betAmount, cashoutAt, crashPoint]);

  const handleBetPlacement = () => {
    if (betAmount > 0) {
      setIsBetPlaced(true);
      setProfitOnWin(0);
      setMultiplier(0);
      setIsCrashed(false);
      setCrashPoint(Math.random() * (maxMultiplier - 1) + 1); // Random crash point between 1 and maxMultiplier
      setShowModal(false);
      setData(prevData => ({
        ...prevData,
        datasets: [{
          ...prevData.datasets[0],
          data: [{ x: 0, y: 0 }],
          backgroundColor: 'rgba(0, 255, 0, 0.3)', // Reset color for new round
        }],
      }));
    }
  };

  const handleHalfBet = () => {
    setBetAmount(prevAmount => prevAmount / 2);
  };

  const handleDoubleBet = () => {
    setBetAmount(prevAmount => prevAmount * 2);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-4xl font-bold mb-6">Crash Game Interface</h1>
      <div className="flex flex-col md:flex-row w-11/12 md:w-2/3 bg-gray-800 p-4 rounded-lg shadow-lg mx-auto">
        <div className="w-full md:w-1/3 flex flex-col items-center p-4 space-y-6">
            <div className="flex flex-col items-center mt-6 w-full">
            <div className="w-full flex flex-col items-center bg-gray-700 p-4 rounded-lg space-y-4">
                <div className="w-full flex justify-between items-center">
                <div className="text-gray-400">Bet Amount</div>
                <div className="text-gray-400">${betAmount.toFixed(2)}</div>
                </div>
                <div className="w-full flex items-center bg-gray-600 rounded-lg">
                <input
                    type="number"
                    value={betAmount}
                    onChange={(e) => setBetAmount(parseFloat(e.target.value))}
                    className="w-full px-4 py-2 text-black rounded-l-lg"
                    placeholder="0.00000000"
                    disabled={isBetPlaced}
                />
                <button onClick={handleHalfBet} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-r-lg">½</button>
                <button onClick={handleDoubleBet} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-r-lg ml-2">2×</button>
                </div>
                <div className="w-full flex justify-between items-center">
                <div className="text-gray-400">Cashout At</div>
                <div className="text-gray-400">${cashoutAt.toFixed(2)}</div>
                </div>
                <div className="w-full flex items-center bg-gray-600 rounded-lg">
                <input
                    type="number"
                    value={cashoutAt}
                    onChange={(e) => setCashoutAt(parseFloat(e.target.value))}
                    className="w-full px-4 py-2 text-black rounded-lg"
                    placeholder="2.00"
                    disabled={isBetPlaced}
                />
                </div>
                <div className="w-full flex justify-between items-center">
                <div className="text-gray-400">Profit on Win</div>
                <div className="text-gray-400">${profitOnWin.toFixed(2)}</div>
                </div>
                <div className="w-full flex items-center bg-gray-600 rounded-lg">
                <input
                    type="number"
                    value={profitOnWin}
                    readOnly
                    className="w-full px-4 py-2 text-black rounded-lg"
                    placeholder="0.00000000"
                />
                </div>
                <button
                onClick={handleBetPlacement}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
                disabled={isBetPlaced}
                >
                Bet
                </button>
            </div>
            <div className="text-center text-2xl font-semibold mt-4 text-yellow-400">
                {multiplier.toFixed(2)}x
            </div>
            </div>
        </div>
        <div className="w-full md:w-2/3 mt-6 md:mt-0">
            <div className="h-64 md:h-full">
            <Line
                data={data}
                options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Multiplier',
                        color: '#ffffff',
                    },
                    grid: {
                        color: '#666',
                    },
                    ticks: {
                        color: '#ffffff',
                    },
                    },
                    y: {
                    title: {
                        display: true,
                        text: 'Profit',
                        color: '#ffffff',
                    },
                    grid: {
                        color: '#666',
                    },
                    ticks: {
                        color: '#ffffff',
                    },
                    },
                },
                plugins: {
                    legend: {
                    display: false,
                    },
                },
                }}
            />
            </div>
        </div>
    </div>

    {/* <CustomModal
        showModal={showModal}
        closeModal={closeModal}
        modalColor="green"
        modalMessage="This is a modal"
      /> */}
    </div>
  );
};

export default Crash;
