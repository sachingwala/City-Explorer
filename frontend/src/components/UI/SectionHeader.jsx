import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <motion.div
      className="section-header"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0, y: 20 }}
      

      style={{
        textAlign: 'center',
        marginBottom: '2rem',
        color: 'rgb(44, 12, 5)',
        padding: '3rem',
        backgroundColor: 'rgb(233, 201, 164)',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        // transition: 'transform 0.3s ease-in-out',
        // cursor: 'pointer',
        // '&:hover': {
        //   transform: 'scale(1.03)',
        // },
      }}
    >
      <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>{title}</h2>
      {subtitle && <p style={{ fontSize: '1.4rem', color: 'rgb(92, 54, 40)' }}>{subtitle}</p>}
    </motion.div>
  );
};

export default SectionHeader;
