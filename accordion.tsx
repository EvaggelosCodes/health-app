import { useState } from 'react';
import { HomeScreen } from './components/HomeScreen';
import { NutritionScreen } from './components/NutritionScreen';
import { PremiumScreen } from './components/PremiumScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'nutrition' | 'premium'>('home');

  return (
    <div className="size-full flex items-center justify-center bg-[#f3f4f6]">
      <div className="w-[390px] h-[844px] bg-white shadow-2xl rounded-[40px] overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50"></div>

        <div className="h-full overflow-y-auto">
          {currentScreen === 'home' && <HomeScreen onNavigate={setCurrentScreen} />}
          {currentScreen === 'nutrition' && <NutritionScreen onNavigate={setCurrentScreen} />}
          {currentScreen === 'premium' && <PremiumScreen onNavigate={setCurrentScreen} />}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white border-t border-transparent">
          <div className="flex justify-center items-center h-full gap-6">
            <button
              onClick={() => setCurrentScreen('home')}
              className={`w-2 h-2 rounded-full transition-all ${currentScreen === 'home' ? 'bg-[#10b981] w-6' : 'bg-[#d1d5db]'}`}
            />
            <button
              onClick={() => setCurrentScreen('nutrition')}
              className={`w-2 h-2 rounded-full transition-all ${currentScreen === 'nutrition' ? 'bg-[#10b981] w-6' : 'bg-[#d1d5db]'}`}
            />
            <button
              onClick={() => setCurrentScreen('premium')}
              className={`w-2 h-2 rounded-full transition-all ${currentScreen === 'premium' ? 'bg-[#10b981] w-6' : 'bg-[#d1d5db]'}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}