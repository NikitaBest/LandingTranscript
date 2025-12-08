import { ArrowRight, Mic, Brain, FileText, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Шаг 1. Записываете консультацию",
      desc: "Через веб или Telegram. Можно долго, с паузами.",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Шаг 2. Сервис анализирует аудио",
      desc: "Распознаёт речь, обрабатывает термины, структуру и смысл.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Шаг 3. AI формирует отчёт",
      desc: "Готовый структурированный документ + итоговый текст.",
    },
    {
      icon: <Send className="w-6 h-6" />,
      title: "Шаг 4. Экспортируете и отправляете",
      desc: "PDF, копирование текста, публичная ссылка только для пациента.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-secondary/30 relative overflow-hidden">
        {/* Background Decorative Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-border/50 -translate-y-1/2 hidden md:block z-0" />
        
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Всего 4 шага до готового медицинского отчёта
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-white p-6 rounded-2xl shadow-sm border border-border/50 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                {step.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>

              {/* Arrow for desktop connecting cards */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-muted-foreground/30 z-20">
                    <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
