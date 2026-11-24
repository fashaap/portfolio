export function Footer() {
    return (
        <footer
            className="w-full py-10 px-6 md:px-16 animate-in fade-in slide-in-from-bottom-4 duration-1000"
        >
            <div className="max-w-[800px] mx-auto">
                <div className="
          flex flex-col md:flex-row items-center justify-between gap-8
          px-6 py-8
          bg-white/80 md:bg-white/40 md:backdrop-blur-md
          border border-white/20 rounded-2xl
          shadow-lg shadow-black/5
          transition-all duration-500
        ">

                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div className="font-extrabold text-blue-600 text-2xl tracking-tight select-none">
                            FSH.
                        </div>
                        <p className="text-black text-[10px]  uppercase tracking-widest font-bold">
                            PORTFOLIO
                        </p>
                    </div>


                    <div className="text-black text-xs font-bold ">
                        © {new Date().getFullYear()} Fasha Azhi Putra. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}
