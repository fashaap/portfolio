export function Footer() {
    return (
        <footer
            className="w-full py-10 px-6 md:px-16 animate-in fade-in slide-in-from-bottom-4 duration-1000"
        >
            <div className="max-w-[1000px] mx-auto">
                <div className="
          flex flex-col md:flex-row items-center justify-between gap-8 
          px-6 py-8 
          bg-white/40 backdrop-blur-md 
          border border-white/20 rounded-2xl 
          shadow-lg shadow-black/5
          transition-all duration-500
        ">
                    {/* Logo & Subtitle */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div className="font-extrabold text-blue-600 text-2xl tracking-tight select-none">
                            FSH.
                        </div>
                        <p className="text-gray-500 text-[10px] font-mono-tech uppercase tracking-widest font-bold">
                            Architecture & Aesthetics
                        </p>
                    </div>

                    {/* Copyright */}
                    <div className="text-gray-400 text-xs font-bold font-mono-tech">
                        © {new Date().getFullYear()} Fasha. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}