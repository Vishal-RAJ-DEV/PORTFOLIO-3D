import React, { useState, useEffect } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // Check if WebGL is supported
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) {
      setShowFallback(true);
    }
  }, []);

  if (showFallback) {
    // 2D fallback version
    return (
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28 flex flex-col items-center' key={technology.name}>
            <div className='w-20 h-20 bg-tertiary rounded-full border border-secondary flex items-center justify-center mb-2'>
              <img 
                src={technology.icon}
                alt={technology.name}
                className='w-12 h-12 object-contain'
              />
            </div>
            <p className='text-secondary text-sm text-center'>{technology.name}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
