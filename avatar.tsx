import { ArrowRight, Check, Sparkles, TrendingUp, X } from 'lucide-react';

interface PremiumScreenProps {
  onNavigate: (screen: string) => void;
}

export function PremiumScreen({ onNavigate }: PremiumScreenProps) {
  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white">
      <div className="px-6 pt-8 pb-6">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors mb-6"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-6 h-6 text-[#fbbf24]" />
          <span className="text-[#fbbf24] text-[14px] font-semibold uppercase tracking-wide">Premium</span>
        </div>

        <h1 className="text-[32px] font-bold mb-3 leading-tight">
          Unlock Your Full Potential
        </h1>

        <p className="text-[#94a3b8] text-[16px] leading-relaxed">
          Get personalized AI coaching and advanced insights to reach your goals faster.
        </p>
      </div>

      <div className="flex-1 px-6 pb-6 overflow-y-auto">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 mb-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#10b981] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Unlimited AI Meal Plans</h3>
                <p className="text-[#94a3b8] text-[14px]">Get custom nutrition plans tailored to your goals, updated daily</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#10b981] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Advanced Analytics</h3>
                <p className="text-[#94a3b8] text-[14px]">Track trends, patterns, and progress with detailed insights</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#10b981] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">1-on-1 Coach Support</h3>
                <p className="text-[#94a3b8] text-[14px]">Direct messaging with certified health coaches</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#10b981] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Workout Video Library</h3>
                <p className="text-[#94a3b8] text-[14px]">Access 500+ guided workout videos and programs</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#10b981]/20 to-[#059669]/20 rounded-2xl p-4 border border-[#10b981]/30 mb-6 flex items-center gap-3">
          <TrendingUp className="w-5 h-5 text-[#10b981] flex-shrink-0" />
          <p className="text-[14px]">
            <span className="font-semibold">18,400 members</span> <span className="text-[#94a3b8]">upgraded this month</span>
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 mb-6">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-[36px] font-bold">€12</span>
            <span className="text-[#94a3b8]">/month</span>
          </div>
          <p className="text-[#94a3b8] text-[14px]">Cancel anytime • 7-day free trial</p>
        </div>

        <button className="w-full bg-gradient-to-r from-[#10b981] to-[#059669] text-white rounded-2xl py-4 font-semibold flex items-center justify-center gap-2 shadow-2xl hover:shadow-3xl transition-all mb-3">
          Go Premium
          <ArrowRight className="w-5 h-5" />
        </button>

        <p className="text-center text-[#64748b] text-[12px]">
          By continuing, you agree to our Terms of Service
        </p>
      </div>
    </div>
  );
}
