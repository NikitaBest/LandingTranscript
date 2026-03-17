import { motion } from "framer-motion";

export default function DemoReport() {
  return (
    <section id="demo" className="py-16 sm:py-24 md:py-32 bg-secondary/10 relative">
      {/* Decorative tech line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-linear-to-b from-transparent to-border/50" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 md:mb-8">
              <span className="text-xs font-mono text-primary/60 border border-primary/20 px-2 py-1 rounded mb-3 md:mb-4 inline-block">
                ПРИМЕР ОТЧЁТА
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
                Что формирует система
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Сервис автоматически выделяет ключевые элементы консультации и
                превращает их в структурированный медицинский документ.
              </p>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              {[
                {
                  label: "Жалобы",
                  text: "AI автоматически выделяет жалобы и ключевые симптомы пациента.",
                },
                {
                  label: "Объективный статус",
                  text: "Формируется объективный статус и клиническая картина приёма.",
                },
                {
                  label: "План лечения",
                  text: "Создаётся структурированный план лечения и последующие шаги.",
                },
                {
                  label: "Карта пациента и рекомендации",
                  text: "Заполняется карта пациента и даются рекомендации по AI‑оценке консультации (Калгари‑Кембридж).",
                },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-white border border-border/50 hover:border-primary/30 transition-colors shadow-xs"
                >
                  <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                  <div>
                    <span className="block font-bold text-xs sm:text-sm text-foreground">{item.label}</span>
                    <span className="text-xs sm:text-sm text-muted-foreground">{item.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative perspective-1000 mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-[900px] mx-auto px-2 sm:px-4">
              <img 
                src="/2.svg" 
                alt="Пример медицинского отчёта в интерфейсе" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
