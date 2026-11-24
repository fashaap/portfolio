import { CheckCircle2, Award, Zap, Code } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function AboutSection() {
  const { ref, isVisible } = useScrollReveal()

  const coreSkills = [
    { name: 'Back-End Development', icon: <Zap className="w-4 h-4 text-blue-600" /> },
    { name: 'Front-End Development', icon: <Code className="w-4 h-4 text-blue-600" /> },
    { name: 'UI/UX Design', icon: <CheckCircle2 className="w-4 h-4 text-blue-600" /> },
    { name: 'Software Engineering Fundamentals', icon: <Award className="w-4 h-4 text-blue-600" /> },
  ]

  return (
    <section
      ref={ref}
      className={`px-6 py-5 md:px-16 md:py-28 bg-transparent transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
    >

      <div className="max-w-[800px] mx-auto rounded-2xl overflow-hidden border border-gray-200 shadow-xl shadow-black/5 bg-white transition-all duration-500 hover:shadow-blue-600/5">


        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="font-mono-tech text-[10px] sm:text-xs text-gray-400 ml-2">
            about_me.tsx
          </span>
        </div>


        <div className="p-6 sm:p-12">
          <p className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed mb-6">
              Halo, saya Fasha Azhi Putra, mahasiswa Software Engineering di Telkom University. Saya senang berkarya melalui codingan yang diimplementasikan menjadi sebuah produk, dari design hingga codingan yang membuat antarmuka menjadi lebih nyaman dipakai hingga mudah untuk digunakan. Selain itu, Hobi saya bermain game, menonton Windah Basudara, dan mengeksplor hal yang baru.
          </p>

          <div>
            <h3 className="font-black text-gray-950 text-lg sm:text-xl uppercase tracking-wider mb-6">
              SKILLS
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
