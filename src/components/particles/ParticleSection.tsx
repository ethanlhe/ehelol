import React from 'react';
import { ParticleSimulation } from './ParticleSimulation';

interface ParticleSectionProps {
  theme: string;
  boxClasses: string;
}

export const ParticleSection: React.FC<ParticleSectionProps> = ({
  theme,
  boxClasses
}) => {
  return (
    <div className={boxClasses}>
      <div className="relative h-full w-full flex flex-col items-center justify-center">
        <ParticleSimulation 
          theme={theme} 
          className="absolute inset-0"
          particleCount={30}
          speed={0.8}
        />
        <div className="relative z-10 text-center pointer-events-none">
          <h3 className="text-lg font-semibold mb-2">
            Particle Simulation
          </h3>
          <p className="text-sm opacity-70">
            Interactive particles with dynamic connections
          </p>
        </div>
      </div>
    </div>
  );
};