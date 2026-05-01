import { ArrowRight, Dumbbell, Flame, Moon, UtensilsCrossed } from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-[#f0fdf4] to-white">
      <div className="px-6 pt-8 pb-6">
        <h1 className="text-[28px] font-semibold text-[#065f46] mb-1">Good morning, Alex 👋</h1>
        <p className="text-[#6b7280] text-[14px]">Let's crush your goals today</p>
      </div>

      <div className="flex items-center gap-2 px-6 mb-6">
        <Flame className="w-5 h-5 text-[#f97316]" />
        <span className="text-[20px] font-semibold text-[#065f46]">12 day streak</span>
      </div>

      <div className="px-6 space-y-3 mb-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#e5e7eb]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="w-5 h-5 text-[#10b981]" />
              <span className="text-[#065f46] font-medium">Nutrition</span>
            </div>
            <button
              onClick={() => onNavigate('nutrition')}
              className="text-[#10b981] text-[14px] font-medium hover:underline"
            >
              View plan
            </button>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-[14px]">
              <span className="text-[#6b7280]">Calories</span>
              <span className="text-[#065f46] font-medium">1,680 / 2,200</span>
            </div>
            <div className="w-full bg-[#e5e7eb] rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-[#10b981] to-[#34d399] h-2 rounded-full transition-all" style={{ width: '76%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#e5e7eb]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Dumbbell className="w-5 h-5 text-[#10b981]" />
              <span className="text-[#065f46] font-medium">Today's Workout</span>
            </div>
            <span className="text-[#f97316] text-[12px] bg-[#fff7ed] px-2 py-1 rounded-full">Pending</span>
          </div>
          <p className="text-[#6b7280] text-[14px] mb-3">Upper Body Strength • 45 min</p>
          <p className="text-[#9ca3af] text-[12px] italic">💡 Yesterday: Lower Body (completed)</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#e5e7eb]">
          <div className="flex items-center gap-2 mb-3">
            <Moon className="w-5 h-5 text-[#6366f1]" />
            <span className="text-[#065f46] font-medium">Sleep</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#6b7280] text-[14px]">Last night</span>
            <span className="text-[#065f46] font-medium">7.5 hrs</span>
          </div>
        </div>
      </div>

      <div className="px-6 mb-6">
        <h3 className="text-[#065f46] font-semibold mb-3">Quick Log</h3>
        <div className="grid grid-cols-3 gap-2">
          <button className="bg-white border border-[#e5e7eb] rounded-xl p-3 text-center hover:bg-[#f0fdf4] transition-colors">
            <span className="block text-[20px] mb-1">🍎</span>
            <span className="block text-[12px] text-[#065f46]">Snack</span>
          </button>
          <button className="bg-white border border-[#e5e7eb] rounded-xl p-3 text-center hover:bg-[#f0fdf4] transition-colors">
            <span className="block text-[20px] mb-1">💧</span>
            <span className="block text-[12px] text-[#065f46]">Water</span>
          </button>
          <button className="bg-white border border-[#e5e7eb] rounded-xl p-3 text-center hover:bg-[#f0fdf4] transition-colors">
            <span className="block text-[20px] mb-1">⚡</span>
            <span className="block text-[12px] text-[#065f46]">Energy</span>
          </button>
        </div>
      </div>

      <div className="px-6 pb-8 mt-auto">
        <button className="w-full bg-gradient-to-r from-[#10b981] to-[#059669] text-white rounded-2xl py-4 font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all">
          Start Today's Workout
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
