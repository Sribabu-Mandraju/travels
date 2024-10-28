import React, { useState, useEffect } from "react";
 import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
 
 function CrashGame() {
   const [multiplier, setMultiplier] = useState(1.0);
   const [isPlaying, setIsPlaying] = useState(false);
   const [data, setData] = useState([{ time: 0, multiplier: 1.0 }]);
   const [time, setTime] = useState(0);
 
   useEffect(() => {
     let interval;
     if (isPlaying) {
       interval = setInterval(() => {
         setTime((prev) => prev + 0.1); // Increase time by 0.1 seconds
         setMultiplier(Math.exp(time / 18)); // Exponential growth, accelerates over time
       }, 100); // Update every 100 ms
     } else if (!isPlaying && multiplier !== 1.0) {
       clearInterval(interval);
     }
     return () => clearInterval(interval);
   }, [isPlaying, time]);
 
   useEffect(() => {
     if (isPlaying) {
       setData((prevData) => [...prevData, { time, multiplier }]);
     }
   }, [multiplier, time, isPlaying]);
 
   const startGame = () => {
     setMultiplier(1.0);
     setData([{ time: 0, multiplier: 1.0 }]);
     setTime(0);
     setIsPlaying(true);
   };
 
   const stopGame = () => {
     setIsPlaying(false);
   };
 
   return (
     <div style={{ textAlign: "center", padding: "20px" }}>
       <h1>Crash Game</h1>
       <div style={{ fontSize: "2em", margin: "20px" }}>{multiplier.toFixed(2)}x</div>
       <button onClick={startGame} disabled={isPlaying}>
         Start
       </button>
       <button onClick={stopGame} disabled={!isPlaying}>
         Cash Out
       </button>
 
       <LineChart width={600} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
         <CartesianGrid strokeDasharray="3 3" />
         <XAxis dataKey="time" label={{ value: 'Time (s)', position: 'insideBottomRight', offset: -10 }} />
         <YAxis domain={[1, 'dataMax + 0.5']} label={{ value: 'Multiplier', angle: -90, position: 'insideLeft' }} />
         <Tooltip />
         <Line type="monotone" dataKey="multiplier" stroke="#8884d8" activeDot={{ r: 8 }} />
       </LineChart>
     </div>
   );
 }
 
 export default CrashGame;
