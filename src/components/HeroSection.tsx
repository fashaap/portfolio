import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { MarqueeRow } from './MarqueeRow'
import { ParallaxButton } from './ParallaxButton'

interface HeroSectionProps {
  yellowMode: boolean
}
function TextRotator({ words, interval = 4000 }: { words: string[]; interval?: number }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, interval)
    return () => clearInterval(timer)
  }, [words, interval])

  return (
    <span key={index} className="inline-flex min-h-[1.2em]">
      <WaveText text={words[index]} />
    </span>
  )
}
function WaveText({ text, delayOffset = 0 }: { text: string; delayOffset?: number }) {
  return (
    <span className="inline-flex flex-wrap justify-center md:justify-start">
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="animate-letter-wave opacity-0"
          style={{
            animationDelay: `${delayOffset + index * 0.04}s`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}

export function HeroSection({ yellowMode }: HeroSectionProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-transparent">


      <div className="marquee-band absolute z-[2] origin-top-left pointer-events-none select-none w-[350vw] flex flex-col gap-[0.2vw]">
        <MarqueeRow duration="120s" />
        <MarqueeRow duration="105s" opacity={0.9} reverse />
        <MarqueeRow duration="90s" opacity={0.8} />
      </div>


      <div
        className="absolute inset-0 bg-cover bg-no-repeat pointer-events-none z-[5]"
        style={{ backgroundImage: "url('/udah_siap_belom.png')", backgroundPosition: 'bottom' }}
      />


      <div
        className="absolute inset-0 bg-cover bg-no-repeat pointer-events-none z-[6]"
        style={{ backgroundImage: "url('/atmin_datang.png')", backgroundPosition: 'bottom' }}
      />


      <div
        className="absolute inset-0 bg-cover bg-no-repeat pointer-events-none z-[7] transition-all duration-500 animate-character-slide-up"
        style={{
          backgroundImage: yellowMode ? "url('/alysa_liu.png')" : "url('/alysa_liu_2.png')",
          backgroundPosition: 'bottom',
          animationDelay: '0.4s',
        }}
      />


      <div className="
        absolute z-[10]
        inset-0 px-6
        flex items-center justify-center
        md:left-auto md:right-0 md:w-[52%] md:h-full
      ">
        <div className="w-full text-center md:text-left md:pl-0 md:pr-[4vw]">


          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-600/20 px-3.5 py-1 rounded-full mb-3 md:mb-4 min-h-[28px] sm:min-h-[32px]">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="font-mono-tech text-[10px] sm:text-xs font-bold tracking-widest text-blue-600 uppercase select-none">
              <TextRotator words={['UI/UX Designer', 'Back-End Developer']} />
            </span>
          </div>


          <h1 className="text-gray-950 text-[9vw] sm:text-5xl md:text-[5.5vw] font-black tracking-tight leading-[1] md:leading-[0.95] mb-3 md:mb-4 text-center md:text-left flex flex-col items-center md:items-start select-none">
            <span className="flex flex-col items-center md:items-start text-blue-600 text-[0.8em] leading-[0.9]">
              {/* <WaveText text="HAI" delayOffset={0.1} /> */}
              <WaveText text="SELAMAT DATANG" delayOffset={0.6} />
            </span>
          </h1>


          <p
            className="text-gray-700 text-sm sm:text-base md:text-[1.05vw] max-w-[520px] mb-6 mx-auto md:mx-0 leading-relaxed font-medium animate-fade-in-up"
            style={{ animationDelay: '1.2s' }}
          >
            Hii, Aku Fasha Azhi Putra, Mahasiswa Universitas Telkom Prodi S1 Software Engineer <span className='text-2xl'>👋</span> 
          </p>


          <div className="animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
            <ParallaxButton to="#projects">
              View Projects <ArrowRight className="w-4 h-4 md:w-[1.2vw] md:h-[1.2vw]" />
            </ParallaxButton>
          </div>

        </div>
      </div>

    </div>
  )
}
