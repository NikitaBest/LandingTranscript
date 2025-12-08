import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import recordScreen from "@assets/record_screen.png";
import { MacbookFrame } from "@/components/ui/macbook-frame";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  // Removed opacity fade to keep image visible longer
  
  return (
    <section ref={containerRef} className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-br from-gray-100 to-transparent rounded-full blur-[120px] opacity-60 animate-pulse duration-[5000ms]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-gray-200 to-transparent rounded-full blur-[100px] opacity-40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-20">
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
            
            <div className="relative inline-block w-full">
              {/* Audio Pulse Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] pointer-events-none -z-10 flex items-center justify-center opacity-20">
                <div className="flex items-center justify-center gap-1 md:gap-2 h-32 md:h-48 w-full max-w-2xl px-4">
                  {[...Array(40)].map((_, i) => {
                    // Generate a "voice pattern" look by varying heights
                    const center = 20;
                    const dist = Math.abs(i - center);
                    const baseHeight = Math.max(10, 100 - (dist * 4)); 
                    
                    return (
                      <motion.div
                        key={i}
                        className="w-1.5 md:w-2 bg-foreground rounded-full"
                        initial={{ height: baseHeight * 0.2 }}
                        animate={{ 
                          height: [
                            baseHeight * 0.4, 
                            baseHeight * (0.8 + Math.random() * 0.5), 
                            baseHeight * 0.4
                          ] 
                        }}
                        transition={{
                          duration: 0.8 + Math.random() * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.05
                        }}
                      />
                    );
                  })}
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 text-foreground tracking-tight relative z-10">
                AI-сервис, который <br/>
                превращает консультации <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">
                  в готовые отчёты
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              Запишите консультацию — сервис сам расшифрует речь, структурирует
              информацию и создаст медицинский отчёт за 30 секунд.
            </p>
            
            <div className="flex items-center justify-center gap-4">
              <Button
                size="lg"
                className="rounded-full px-10 h-14 text-lg shadow-2xl shadow-primary/10 hover:shadow-primary/20 transition-all hover:scale-105 bg-primary text-primary-foreground"
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
          className="relative max-w-5xl mx-auto perspective-1000"
        >
          <MacbookFrame 
            src={recordScreen} 
            alt="Интерфейс записи консультации" 
          />
        </motion.div>
      </div>
    </section>
  );
}
