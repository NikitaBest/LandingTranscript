import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Запись",
      desc: "Записываете консультацию через веб или Telegram. Можно с паузами.",
    },
    {
      id: "02",
      title: "Анализ",
      desc: "Сервис распознаёт речь, обрабатывает термины и структуру.",
    },
    {
      id: "03",
      title: "Отчёт",
      desc: "AI формирует готовый структурированный медицинский документ.",
    },
    {
      id: "04",
      title: "Экспорт",
      desc: "Скачиваете PDF или отправляете ссылку пациенту.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tight"
          >
            Как это работает
          </motion.h2>
          <div className="h-1 w-20 bg-primary/20 rounded-full" />
        </div>

        <div className="relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-border/30">
            <motion.div 
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            />
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Step Marker */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-6 md:mb-8 bg-background border border-border/50 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-2 relative z-10">
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-border group-hover:text-primary transition-colors font-mono">
                    {step.id}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base border-l-2 border-transparent pl-0 group-hover:border-primary/20 group-hover:pl-4 transition-all duration-300">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
