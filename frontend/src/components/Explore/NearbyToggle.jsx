import React, { useState } from 'react';

const NearbyToggle = () => {
  const [nearby, setNearby] = useState(false);

  return (
    <label style={{
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      gap: '0.5rem'
    }}>
      <input
        type="checkbox"
        checked={nearby}
        onChange={() => setNearby(!nearby)}
      />
      <span style={{ color: '#4E342E' }}>Show places near me</span>
    </label>
  );
};

export default NearbyToggle;
