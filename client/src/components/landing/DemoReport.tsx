import { motion } from "framer-motion";

export default function DemoReport() {
  return (
    <section id="demo" className="py-32 bg-secondary/10 relative">
      {/* Decorative tech line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-linear-to-b from-transparent to-border/50" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <span className="text-xs font-mono text-primary/60 border border-primary/20 px-2 py-1 rounded mb-4 inline-block">
                OUTPUT_PREVIEW
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                Результат работы AI
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Врач получает полностью структурированный документ, готовый к печати или отправке пациенту.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                { label: "Жалобы", text: "Анализ симптомов и истории боли" },
                { label: "Объективно", text: "Описание клинической картины" },
                { label: "План", text: "Сгенерированный протокол лечения" },
                { label: "Итог", text: "Рекомендации для пациента" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-border/50 hover:border-primary/30 transition-colors shadow-xs"
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <div>
                    <span className="block font-bold text-sm text-foreground">{item.label}</span>
                    <span className="text-sm text-muted-foreground">{item.text}</span>
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
            className="relative perspective-1000"
          >
            <div className="relative w-full max-w-[900px] mx-auto">
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
