
import React from 'react';
import { WaterCycleStage } from '../types';

interface Props {
  currentStage: WaterCycleStage;
  setStage: (stage: WaterCycleStage) => void;
}

const WaterCycleVisual: React.FC<Props> = ({ currentStage, setStage }) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-video bg-sky-100 rounded-3xl border-8 border-white shadow-2xl overflow-hidden cursor-default">
      {/* Background Elements */}
      <svg viewBox="0 0 800 450" className="w-full h-full">
        {/* Sky Gradient */}
        <defs>
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#bae6fd" />
            <stop offset="100%" stopColor="#f0f9ff" />
          </linearGradient>
        </defs>
        <rect width="800" height="450" fill="url(#skyGradient)" />

        {/* Ocean/Water Body */}
        <path 
          d="M0 350 Q 200 330 400 350 T 800 350 V 450 H 0 Z" 
          fill="#3b82f6" 
          className="transition-colors duration-500"
        />
        <path 
          d="M0 370 Q 200 350 400 370 T 800 370 V 450 H 0 Z" 
          fill="#2563eb" 
          opacity="0.5"
        />

        {/* Sun */}
        <g 
          className={`cursor-pointer group transition-transform duration-500 ${currentStage === WaterCycleStage.EVAPORATION ? 'scale-110' : ''}`}
          onClick={() => setStage(WaterCycleStage.EVAPORATION)}
        >
          <circle cx="100" cy="80" r="40" fill="#fde047" className="animate-pulse" />
          <circle cx="100" cy="80" r="30" fill="#fbbf24" />
          {/* Sun Rays */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
            <line 
              key={deg}
              x1="100" y1="80" 
              x2={100 + Math.cos(deg * Math.PI / 180) * 60} 
              y2={80 + Math.sin(deg * Math.PI / 180) * 60} 
              stroke="#fde047" 
              strokeWidth="4" 
              strokeLinecap="round"
            />
          ))}
        </g>

        {/* Mountains */}
        <path d="M400 350 L550 150 L700 350 Z" fill="#94a3b8" />
        <path d="M500 216 L550 150 L600 216 Z" fill="white" /> {/* Snow Cap */}

        {/* Clouds */}
        <g 
          className={`cursor-pointer transition-transform duration-500 ${currentStage === WaterCycleStage.CONDENSATION ? 'scale-110' : ''}`}
          onClick={() => setStage(WaterCycleStage.CONDENSATION)}
        >
          <g transform="translate(550, 80)">
             <circle cx="0" cy="0" r="30" fill="white" />
             <circle cx="30" cy="0" r="35" fill="white" />
             <circle cx="60" cy="0" r="30" fill="white" />
             <circle cx="30" cy="-20" r="30" fill="white" />
          </g>
        </g>

        {/* Interaction Animations */}
        
        {/* Evaporation Particles */}
        {currentStage === WaterCycleStage.EVAPORATION && (
          <g>
            {[100, 150, 200, 250, 300].map((x, i) => (
              <path 
                key={i}
                d={`M ${x} 340 Q ${x+10} 330 ${x} 320`}
                stroke="white"
                strokeWidth="3"
                fill="none"
                opacity="0.6"
                className="vapor-particle"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
            ))}
          </g>
        )}

        {/* Precipitation (Rain) */}
        {currentStage === WaterCycleStage.PRECIPITATION && (
          <g>
             {[540, 560, 580, 600, 620].map((x, i) => (
               <line 
                key={i}
                x1={x} y1="120"
                x2={x} y2="135"
                stroke="#60a5fa"
                strokeWidth="3"
                strokeLinecap="round"
                className="rain-drop"
                style={{ animationDelay: `${i * 0.2}s` }}
               />
             ))}
          </g>
        )}

        {/* Collection/Runoff Flow */}
        {currentStage === WaterCycleStage.COLLECTION && (
          <path 
            d="M550 160 L500 250 Q480 300 400 350" 
            stroke="#60a5fa" 
            strokeWidth="6" 
            fill="none" 
            strokeDasharray="10 10" 
            className="animate-[dash_2s_linear_infinite]"
          />
        )}
      </svg>

      {/* Control Buttons Overlay */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
        {[
          { id: WaterCycleStage.EVAPORATION, label: '蒸发', color: 'bg-yellow-400' },
          { id: WaterCycleStage.CONDENSATION, label: '凝结', color: 'bg-sky-200' },
          { id: WaterCycleStage.PRECIPITATION, label: '降水', color: 'bg-blue-400' },
          { id: WaterCycleStage.COLLECTION, label: '收集', color: 'bg-blue-600' },
        ].map(btn => (
          <button
            key={btn.id}
            onClick={() => setStage(btn.id)}
            className={`px-4 py-2 rounded-full font-bold text-white shadow-lg transition-all hover:scale-110 ${btn.color} ${currentStage === btn.id ? 'ring-4 ring-white' : ''}`}
          >
            {btn.label}
          </button>
        ))}
        <button
          onClick={() => setStage(WaterCycleStage.NONE)}
          className="px-4 py-2 rounded-full font-bold bg-gray-400 text-white hover:bg-gray-500"
        >
          重置
        </button>
      </div>
    </div>
  );
};

export default WaterCycleVisual;
