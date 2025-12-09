import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mic } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  return (
    <section ref={containerRef} className="relative pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-40 lg:pb-32 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-br from-gray-100 to-transparent rounded-full blur-[120px] opacity-60 animate-pulse duration-[5000ms]" />
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-gray-200 to-transparent rounded-full blur-[100px] opacity-40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/50 border border-border/50 text-primary text-sm font-medium mb-8 backdrop-blur-sm"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              AI-ассистент для стоматологов
            </motion.div>
            
            {/* Audio Pulse & Mic Section - Above Title */}
            <div className="flex items-center justify-center gap-3 sm:gap-6 mb-6 md:mb-8 h-12 md:h-16">
               {/* Microphone Icon */}
               <motion.div 
                 initial={{ scale: 0, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{ delay: 0.3, duration: 0.5 }}
                 className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center shadow-sm shrink-0"
               >
                 <Mic className="w-4 h-4 md:w-5 md:h-5 text-gray-900" />
               </motion.div>

               {/* Waveform Visualization */}
               <div className="flex items-center justify-center gap-0.5 sm:gap-1 h-12">
                  {[...Array(24)].map((_, i) => {
                    // Generate a "voice pattern" look by varying heights
                    const center = 12;
                    const dist = Math.abs(i - center);
                    const baseHeight = Math.max(4, 40 - (dist * 3)); 
                    
                    return (
                      <motion.div
                        key={i}
                        className="w-1 bg-gray-900 rounded-full"
                        initial={{ height: baseHeight * 0.2 }}
                        animate={{ 
                          height: [
                            baseHeight * 0.3, 
                            baseHeight * (0.8 + Math.random() * 0.4), 
                            baseHeight * 0.3
                          ] 
                        }}
                        transition={{
                          duration: 0.6 + Math.random() * 0.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.05
                        }}
                      />
                    );
                  })}
               </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 md:mb-8 text-foreground tracking-tight relative z-10 px-2">
              AI-сервис, который <br className="hidden sm:block"/>
              превращает консультации <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">
                в готовые отчёты
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed font-light px-4">
              Запишите консультацию — сервис сам расшифрует речь, структурирует
              информацию и создаст медицинский отчёт за 30 секунд.
            </p>
            
            <div className="flex items-center justify-center gap-4 px-4">
              <Button
                size="lg"
                className="rounded-full px-6 sm:px-8 md:px-10 h-12 sm:h-14 text-base sm:text-lg shadow-2xl shadow-primary/10 hover:shadow-primary/20 transition-all hover:scale-105 bg-primary text-primary-foreground w-full sm:w-auto"
              >
                Перейти в приложение
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          style={{ y }}
          initial={{ opacity: 0, rotateX: 20, y: 100 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 50 }}
          className="relative max-w-5xl mx-auto perspective-1000 mt-8 md:mt-0"
        >
          <div className="relative w-full max-w-[900px] mx-auto px-2 sm:px-4">
            <img 
              src="/1.svg" 
              alt="Интерфейс записи консультации" 
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
