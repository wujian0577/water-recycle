
import React, { useState } from 'react';
import WaterCycleVisual from './components/WaterCycleVisual';
import ChatInterface from './components/ChatInterface';
import { WaterCycleStage } from './types';
import { STAGE_DATA } from './constants';

const App: React.FC = () => {
  const [currentStage, setCurrentStage] = useState<WaterCycleStage>(WaterCycleStage.NONE);

  const activeData = STAGE_DATA[currentStage];

  return (
    <div className="min-h-screen pb-12">
      {/* Header */}
      <header className="bg-white shadow-sm py-6 mb-8 border-b-4 border-sky-400">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-black text-sky-600 comic-font tracking-wider flex items-center">
            <span className="mr-3 animate-float">💧</span>
            神奇的水循环
            <span className="ml-3 animate-float [animation-delay:0.5s]">🌤️</span>
          </h1>
          <p className="mt-2 text-gray-500 font-medium">三年级科学课趣味互动平台</p>
        </div>
      </header>

      <main className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Visualization Area */}
          <div className="lg:col-span-2 space-y-8">
            <WaterCycleVisual currentStage={currentStage} setStage={setCurrentStage} />
            
            {/* Info Card */}
            <div className={`p-6 rounded-3xl bg-white shadow-xl border-l-8 transition-all duration-500 transform ${
              currentStage === WaterCycleStage.NONE ? 'border-gray-400' : 'border-sky-500'
            }`}>
              <h2 className="text-2xl font-bold text-sky-700 mb-3 flex items-center">
                {currentStage !== WaterCycleStage.NONE && <span className="mr-2">💡</span>}
                {activeData.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {activeData.description}
              </p>
              <div className="bg-yellow-50 p-4 rounded-2xl border border-yellow-100 italic text-gray-600 flex items-start">
                <span className="text-xl mr-2">🌟</span>
                <div>
                  <span className="font-bold text-yellow-700">冷知识：</span>
                  {activeData.funFact}
                </div>
              </div>
            </div>

            {/* Instruction Footer */}
            <div className="bg-sky-600 p-6 rounded-3xl text-white shadow-lg flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold mb-1">如何互动？</h3>
                <ul className="text-sm opacity-90">
                  <li>• 点击图中的太阳、云朵或水面试试看</li>
                  <li>• 使用下方的按钮切换不同的阶段</li>
                  <li>• 在右侧向滴滴老师提问！</li>
                </ul>
              </div>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    <img src={`https://picsum.photos/seed/kid${i}/100/100`} alt="Avatar" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-white bg-sky-400 flex items-center justify-center text-xs font-bold">
                  +25
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar / Chat Interface */}
          <div className="lg:col-span-1 space-y-6">
            <ChatInterface />
            
            <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-6 rounded-3xl text-white shadow-xl">
              <h3 className="text-xl font-bold mb-2">学到了什么？</h3>
              <p className="text-sm mb-4 opacity-90">
                水循环不仅让植物喝到水，还让我们的地球保持凉爽呢！
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                   <input type="checkbox" className="w-5 h-5 accent-white" />
                   <span className="text-sm">我知道水是怎么变云的</span>
                </div>
                <div className="flex items-center space-x-2">
                   <input type="checkbox" className="w-5 h-5 accent-white" />
                   <span className="text-sm">我学会了“蒸发”这个词</span>
                </div>
                <div className="flex items-center space-x-2">
                   <input type="checkbox" className="w-5 h-5 accent-white" />
                   <span className="text-sm">我知道雨最后流到了哪里</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-400 text-sm">
        <p>© 2024 神奇的水循环实验室 - 让科学变得更有趣！</p>
      </footer>
    </div>
  );
};

export default App;
