import { Mic, FileText, Share2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Benefits() {
  const benefits = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "1. Распознаёт речь врача и пациента",
      description:
        "Высокоточная AI-модель превращает аудио в текст, учитывая сложную медицинскую терминологию и контекст.",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "2. Формирует полный отчёт",
      description:
        "Сервис автоматически создаёт жалобы, объективный статус, план лечения, комментарий врача и Summary.",
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "3. Готовые материалы для пациента",
      description:
        "В один клик получайте PDF отчёт, публичную ссылку и историю консультаций. Врач экономит время — пациент получает понятные рекомендации.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-secondary/20 hover:bg-secondary/40 transition-colors border border-transparent hover:border-primary/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
