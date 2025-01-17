import React from "react";
import { motion } from "framer-motion";
import "./About.css"
const Advantages = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger the animation for child elements
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="advantages" id="advantages">
      <h2 className="advantages-heading">Why Choose Our App?</h2>
      <motion.div
        className="advantages-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Trigger animation when 10% of the section is visible
      >
        <motion.div className="advantage-item" variants={itemVariants}>
          <div className="advantage-card-right">
            <h3 className="h3">Faster Results</h3>
            <span className="advantage-icon">⚡</span>
          </div>
          <div className="advantage-info-left">
            <p>
              Achieve your fitness goals faster with personalized training plans, AI
              feedback, and real-time tracking.
            </p>
          </div>
        </motion.div>

        <motion.div className="advantage-item" variants={itemVariants}>
          <div className="advantage-card-right">
            <h3 className="h3">Data-Driven Insights</h3>
            <span className="advantage-icon">📊</span>
          </div>
          <div className="advantage-info-left">
            <p>
              Continuous motivation with insights to adjust your workouts and diet
              for optimal performance.
            </p>
          </div>
        </motion.div>

        <motion.div className="advantage-item" variants={itemVariants}>
          <div className="advantage-card-right">
            <h3 className="h3">Graphical Insights</h3>
            <span className="advantage-icon">📈</span>
          </div>
          <div className="advantage-info-left">
            <p>
              Visualize your progress with interactive and easy-to-understand
              graphs.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Advantages;
