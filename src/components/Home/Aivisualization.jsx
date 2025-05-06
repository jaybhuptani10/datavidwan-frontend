import React from "react";
import { motion } from "framer-motion";
const Aivisualization = ({ animateGraph }) => {
  return (
    <motion.div
      className=" self-center md:w-1/2 p-15 sm:p-8 flex items-center justify-center relative"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative max-w-md">
        {/* Neural Network Visualization */}
        <motion.div
          className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-xl shadow-2xl p-6 border border-gray-700 relative z-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="text-xs text-gray-400">AI Model Training</div>
          </div>

          <div className="h-6 w-3/4 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-md mb-4"></div>

          {/* Neural Network Animation */}
          <div className="relative h-48 mb-4">
            <svg className="w-full h-full" viewBox="0 0 400 150">
              {/* Input layer */}
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.circle
                  key={`input-${i}`}
                  cx="50"
                  cy={20 + i * 30}
                  r="8"
                  fill="url(#gradientBlue)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                />
              ))}

              {/* Hidden layer 1 */}
              {[0, 1, 2, 3].map((i) => (
                <motion.circle
                  key={`hidden1-${i}`}
                  cx="150"
                  cy={30 + i * 30}
                  r="8"
                  fill="url(#gradientPurple)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 + i * 0.1, duration: 0.5 }}
                />
              ))}

              {/* Hidden layer 2 */}
              {[0, 1, 2, 3].map((i) => (
                <motion.circle
                  key={`hidden2-${i}`}
                  cx="250"
                  cy={30 + i * 30}
                  r="8"
                  fill="url(#gradientPurple)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 + i * 0.1, duration: 0.5 }}
                />
              ))}

              {/* Output layer */}
              {[0, 1].map((i) => (
                <motion.circle
                  key={`output-${i}`}
                  cx="350"
                  cy={45 + i * 60}
                  r="8"
                  fill="url(#gradientCyan)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 + i * 0.1, duration: 0.5 }}
                />
              ))}

              {/* Connection lines - drawn dynamically for animation */}
              {animateGraph && (
                <>
                  {/* Input to Hidden 1 connections */}
                  {[0, 1, 2, 3, 4].map((input) =>
                    [0, 1, 2, 3].map((hidden) => (
                      <motion.line
                        key={`conn-i${input}-h1${hidden}`}
                        x1="50"
                        y1={20 + input * 30}
                        x2="150"
                        y2={30 + hidden * 30}
                        stroke="rgba(79, 209, 197, 0.2)"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.5 }}
                        transition={{
                          delay: 1.2 + (input + hidden) * 0.02,
                          duration: 0.5,
                        }}
                      />
                    ))
                  )}

                  {/* Hidden 1 to Hidden 2 connections */}
                  {[0, 1, 2, 3].map((hidden1) =>
                    [0, 1, 2, 3].map((hidden2) => (
                      <motion.line
                        key={`conn-h1${hidden1}-h2${hidden2}`}
                        x1="150"
                        y1={30 + hidden1 * 30}
                        x2="250"
                        y2={30 + hidden2 * 30}
                        stroke="rgba(79, 209, 197, 0.2)"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.5 }}
                        transition={{
                          delay: 1.7 + (hidden1 + hidden2) * 0.02,
                          duration: 0.5,
                        }}
                      />
                    ))
                  )}

                  {/* Hidden 2 to Output connections */}
                  {[0, 1, 2, 3].map((hidden2) =>
                    [0, 1].map((output) => (
                      <motion.line
                        key={`conn-h2${hidden2}-o${output}`}
                        x1="250"
                        y1={30 + hidden2 * 30}
                        x2="350"
                        y2={45 + output * 60}
                        stroke="rgba(79, 209, 197, 0.2)"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.5 }}
                        transition={{
                          delay: 2.2 + (hidden2 + output) * 0.02,
                          duration: 0.5,
                        }}
                      />
                    ))
                  )}

                  {/* Animated data pulse */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="4"
                    fill="#fff"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                      x: [0, 100, 200, 300],
                      y: [0, -20, 30, -5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                </>
              )}

              {/* Gradient definitions */}
              <defs>
                <linearGradient
                  id="gradientBlue"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient
                  id="gradientPurple"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
                <linearGradient
                  id="gradientCyan"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#5eead4" />
                  <stop offset="100%" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Metrics Display */}
          <div className="grid grid-cols-2 gap-3 mb-2">
            <motion.div
              className="bg-white bg-opacity-5 p-2 rounded-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 2.6, duration: 0.5 }}
            >
              <div className="text-xs text-gray-400">Accuracy</div>
              <div className="text-lg font-bold text-cyan-400">98.7%</div>
            </motion.div>
            <motion.div
              className="bg-white bg-opacity-5 p-2 rounded-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 2.7, duration: 0.5 }}
            >
              <div className="text-xs text-gray-400">Processing</div>
              <div className="text-lg font-bold text-teal-400">14ms</div>
            </motion.div>
          </div>

          {/* Real-time Processing Bar */}
          <motion.div
            className="h-2 bg-gray-700 rounded-full overflow-hidden mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 to-teal-400"
              initial={{ width: "0%" }}
              animate={{ width: ["0%", "70%", "20%", "95%", "40%", "60%"] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute -top-8 -right-8 h-20 w-20 bg-cyan-500 rounded-full opacity-20 blur-xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-10 -left-12 h-24 w-24 bg-purple-500 rounded-full opacity-20 blur-xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/3 -left-16 h-16 w-16 bg-teal-500 rounded-full opacity-20 blur-xl"
          animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Tech tags floating around */}
        {["AI", "ML", "NLP", "Vision", "Neural Networks"].map((tag, index) => (
          <motion.div
            key={tag}
            className="absolute bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-sm border border-gray-700 px-3 py-1 rounded-full text-xs font-medium text-cyan-400"
            style={{
              top: `${index * 20 + 10}%`,
              right: index % 2 === 0 ? "-50px" : "auto",
              left: index % 2 !== 0 ? "-50px" : "auto",
            }}
            animate={{
              y: [0, -10, 0, 10, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          >
            {tag}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Aivisualization;
