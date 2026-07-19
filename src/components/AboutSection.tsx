import { CheckCircle2, Award, Zap, Code } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function AboutSection() {
  const { ref, isVisible } = useScrollReveal()

  const coreSkills = [
    { name: 'Back-End Development', icon: <Zap className="w-4 h-4 text-blue-600" /> },
    { name: 'API Design & Integration', icon: <Code className="w-4 h-4 text-blue-600" /> },
    { name: 'UI/UX Design', icon: <CheckCircle2 className="w-4 h-4 text-blue-600" /> },
    { name: 'Software Engineering Fundamentals', icon: <Award className="w-4 h-4 text-blue-600" /> },
  ]

  return (
    <section
      ref={ref}
      className={`px-6 py-5 md:px-16 md:py-28 bg-transparent transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
    >
      {/* macOS-style window */}
      <div className="max-w-[800px] mx-auto rounded-2xl overflow-hidden border border-gray-200 shadow-xl shadow-black/5 bg-white transition-all duration-500 hover:shadow-blue-600/5">

        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="font-mono-tech text-[10px] sm:text-xs text-gray-400 ml-2">
            about.tsx
          </span>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-12">
          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-600/20 px-3.5 py-1 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="font-mono-tech text-[10px] sm:text-xs font-bold tracking-widest text-blue-600 uppercase">
              About Me
            </span>
          </div>

          {/* Bio */}
          <p className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed mb-6">
            Hi, I'm Fasha Azhi Putra, a Software Engineering student at Telkom University. I enjoy building reliable, high-throughput backend services and systems, balancing robust database design and low-latency API logic with a strong focus on clean interface design.
          </p>
          <p className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed mb-10">
            Beyond the back end, I'm also drawn to UI/UX design — making sure every system I build isn't just functional, but intuitive and pleasant to use, bridging the gap between how a product works and how it feels.
          </p>

          {/* Core Competencies Grid */}
          <div>
            <h3 className="font-black text-gray-950 text-lg sm:text-xl uppercase tracking-wider mb-6">
              CORE COMPETENCIES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white border border-gray-100 hover:border-blue-500/30 p-4 rounded-xl transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center">
                    {skill.icon}
                  </div>
                  <span className="font-mono-tech text-xs sm:text-sm font-bold text-gray-800">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}