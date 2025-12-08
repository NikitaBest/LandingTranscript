import {
  Mic,
  Bot,
  BrainCircuit,
  Layout,
  Edit3,
  RefreshCw,
  FolderOpen,
  History,
  FileText,
  Link2,
  Smartphone,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesGrid() {
  const features = [
    { icon: <Mic />, title: "Запись аудио онлайн" },
    { icon: <Bot />, title: "Автоматическая транскрибация" },
    { icon: <BrainCircuit />, title: "LLM-обработка и формирование отчёта" },
    { icon: <Layout />, title: "Структурированные поля отчёта" },
    { icon: <Edit3 />, title: "Редактирование текста" },
    { icon: <RefreshCw />, title: "Повторная обработка LLM" },
    { icon: <FolderOpen />, title: "Карточки пациентов" },
    { icon: <History />, title: "История консультаций" },
    { icon: <FileText />, title: "PDF экспорт" },
    { icon: <Link2 />, title: "Публичная ссылка для пациента" },
    { icon: <Smartphone />, title: "Web + Telegram Mini App" },
    { icon: <ShieldCheck />, title: "Защита данных" },
  ];

  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Основные функции
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Всё, что нужно для эффективной работы с медицинской документацией
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-border/50 flex flex-col items-center text-center hover:shadow-md hover:border-primary/20 transition-all cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <span className="font-semibold text-sm md:text-base">
                {feature.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
