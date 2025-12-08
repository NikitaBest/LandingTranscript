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
              {/* Massive Background Element - Audio/AI Fusion */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[300%] pointer-events-none -z-10 flex items-center justify-center opacity-40 md:opacity-100">
                <svg viewBox="0 0 800 400" className="w-full h-full text-primary/5">
                  <defs>
                    <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
                      <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                    </linearGradient>
                    <mask id="fadeMask">
                       <rect x="0" y="0" width="800" height="400" fill="url(#waveGradient)" />
                    </mask>
                  </defs>
                  
                  {/* Abstract Microphone Shape - Central Pillar */}
                  <g className="translate-x-[400] translate-y-[200]">
                     <motion.path 
                       d="M-40,-80 L40,-80 L40,80 L-40,80 Z" 
                       fill="none" 
                       stroke="currentColor" 
                       strokeWidth="2" 
                       className="text-primary/10"
                       rx="40"
                       initial={{ pathLength: 0, opacity: 0 }}
                       animate={{ pathLength: 1, opacity: 1 }}
                       transition={{ duration: 2, ease: "easeInOut" }}
                     />
                     <motion.path 
                        d="M-20,100 L20,100 M0,80 L0,140 M-30,140 L30,140"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-primary/10"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                     />
                  </g>

                  {/* Animated Sound Waves / AI Data Flow */}
                  {[...Array(20)].map((_, i) => (
                    <motion.g key={i} className="translate-x-[400] translate-y-[200]">
                       {/* Left Wave */}
                       <motion.rect 
                         x={-60 - (i * 12)} 
                         y={-50} 
                         width="4" 
                         height="100" 
                         rx="2"
                         fill="currentColor"
                         className="text-primary/10"
                         initial={{ scaleY: 0.1, opacity: 0 }}
                         animate={{ 
                           scaleY: [0.2, 1, 0.2],
                           opacity: [0, 0.5, 0]
                         }}
                         transition={{ 
                           duration: 3, 
                           repeat: Infinity, 
                           delay: i * 0.1,
                           ease: "easeInOut"
                         }}
                       />
                       {/* Right Wave */}
                       <motion.rect 
                         x={60 + (i * 12)} 
                         y={-50} 
                         width="4" 
                         height="100" 
                         rx="2"
                         fill="currentColor"
                         className="text-primary/10"
                         initial={{ scaleY: 0.1, opacity: 0 }}
                         animate={{ 
                           scaleY: [0.2, 1, 0.2],
                           opacity: [0, 0.5, 0]
                         }}
                         transition={{ 
                           duration: 3, 
                           repeat: Infinity, 
                           delay: i * 0.1,
                           ease: "easeInOut"
                         }}
                       />
                    </motion.g>
                  ))}
                  
                  {/* Floating AI Nodes connecting the waves */}
                  {[...Array(15)].map((_, i) => (
                    <motion.circle 
                      key={`node-${i}`}
                      r="2"
                      fill="currentColor"
                      className="text-primary/30"
                      initial={{ 
                        x: 400 + (Math.random() * 600 - 300),
                        y: 200 + (Math.random() * 200 - 100),
                        opacity: 0
                      }}
                      animate={{ 
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </svg>
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
