import React from 'react';

function HeroSection() {
  const imageStyle = {
    width: '100%',
    height: 'auto', // This maintains the aspect ratio
  };

  return (
    <div>
      <img
        src="https://i.postimg.cc/0NQ19tDq/bnew.jpg"
        alt=""
        style={imageStyle}
      />
    </div>
  );
}

export default HeroSection;
