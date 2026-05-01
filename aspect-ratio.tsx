import { ArrowLeft, Check, HelpCircle, RefreshCw } from 'lucide-react';
import { useState } from 'react';

interface NutritionScreenProps {
  onNavigate: (screen: string) => void;
}

export function NutritionScreen({ onNavigate }: NutritionScreenProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="bg-gradient-to-b from-[#f0fdf4] to-white px-6 pt-8 pb-6">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-[#065f46] mb-4 hover:underline"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </button>
        <h1 className="text-[28px] font-semibold text-[#065f46] mb-1">Nutrition Coach</h1>
        <p className="text-[#6b7280] text-[14px]">AI-powered meal plan for today</p>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <div className="space-y-3 mb-6">
          <div className="bg-white border border-[#e5e7eb] rounded-2xl p-5 shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-[20px]">🍳</span>
                <div>
                  <h3 className="text-[#065f46] font-semibold">Breakfast</h3>
                  <p className="text-[#6b7280] text-[14px]">Greek yogurt parfait with berries</p>
                </div>
              </div>
              <button className="text-[#10b981] p-1 hover:bg-[#f0fdf4] rounded-lg transition-colors">
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
            <div className="flex justify-between items-center mt-3 pt-3 border-t border-[#f3f4f6]">
              <span className="text-[#9ca3af] text-[12px]">Calories</span>
              <span className="text-[#065f46] font-medium text-[14px]">380 cal</span>
            </div>
          </div>

          <div className="bg-white border border-[#e5e7eb] rounded-2xl p-5 shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-[20px]">🥗</span>
                <div>
                  <h3 className="text-[#065f46] font-semibold">Lunch</h3>
                  <p className="text-[#6b7280] text-[14px]">Grilled chicken quinoa bowl</p>
                </div>
              </div>
              <button className="text-[#10b981] p-1 hover:bg-[#f0fdf4] rounded-lg transition-colors">
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
            <div className="flex justify-between items-center mt-3 pt-3 border-t border-[#f3f4f6]">
              <span className="text-[#9ca3af] text-[12px]">Calories</span>
              <span className="text-[#065f46] font-medium text-[14px]">620 cal</span>
            </div>
          </div>

          <div className="bg-white border border-[#e5e7eb] rounded-2xl p-5 shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-[20px]">🍲</span>
                <div>
                  <h3 className="text-[#065f46] font-semibold">Dinner</h3>
                  <p className="text-[#6b7280] text-[14px]">Baked salmon with roasted vegetables</p>
                </div>
              </div>
              <button className="text-[#10b981] p-1 hover:bg-[#f0fdf4] rounded-lg transition-colors">
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
            <div className="flex justify-between items-center mt-3 pt-3 border-t border-[#f3f4f6]">
              <span className="text-[#9ca3af] text-[12px]">Calories</span>
              <span className="text-[#065f46] font-medium text-[14px]">680 cal</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#f0fdf4] to-[#ecfdf5] rounded-2xl p-5 mb-6 border border-[#d1fae5]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#065f46] font-semibold">Macro Breakdown</h3>
            <button
              onClick={() => setShowTooltip(!showTooltip)}
              className="relative"
            >
              <HelpCircle className="w-4 h-4 text-[#6b7280]" />
              {showTooltip && (
                <div className="absolute right-0 top-6 w-48 bg-[#1f2937] text-white text-[12px] p-3 rounded-lg shadow-lg z-10">
                  Macros are the nutrients your body needs: protein for muscle, carbs for energy, and fats for health.
                </div>
              )}
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-[#065f46] text-[14px]">Protein</span>
                <span className="text-[#065f46] font-medium text-[14px]">145g / 165g</span>
              </div>
              <div className="w-full bg-white rounded-full h-2 overflow-hidden">
                <div className="bg-[#ef4444] h-2 rounded-full transition-all" style={{ width: '88%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-[#065f46] text-[14px]">Carbs</span>
                <span className="text-[#065f46] font-medium text-[14px]">210g / 250g</span>
              </div>
              <div className="w-full bg-white rounded-full h-2 overflow-hidden">
                <div className="bg-[#3b82f6] h-2 rounded-full transition-all" style={{ width: '84%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-[#065f46] text-[14px]">Fats</span>
                <span className="text-[#065f46] font-medium text-[14px]">58g / 70g</span>
              </div>
              <div className="w-full bg-white rounded-full h-2 overflow-hidden">
                <div className="bg-[#f59e0b] h-2 rounded-full transition-all" style={{ width: '83%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-[#10b981] to-[#059669] text-white rounded-2xl py-4 font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all">
          <Check className="w-5 h-5" />
          Accept Today's Plan
        </button>
      </div>
    </div>
  );
}
