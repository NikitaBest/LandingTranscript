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
    { icon: <Mic />, title: "Запись онлайн", desc: "Высокое качество" },
    { icon: <Bot />, title: "Авто-транскрибация", desc: "Мгновенный текст" },
    { icon: <BrainCircuit />, title: "LLM-обработка", desc: "Умный анализ" },
    { icon: <Layout />, title: "Структура", desc: "Чёткие поля" },
    { icon: <Edit3 />, title: "Редактор", desc: "Быстрые правки" },
    { icon: <RefreshCw />, title: "Регенерация", desc: "Повторный анализ" },
    { icon: <FolderOpen />, title: "Карточки", desc: "База пациентов" },
    { icon: <History />, title: "История", desc: "Архив записей" },
    { icon: <FileText />, title: "PDF Экспорт", desc: "Готовые документы" },
    { icon: <Link2 />, title: "Публичные ссылки", desc: "Доступ пациенту" },
    { icon: <Smartphone />, title: "Multi-platform", desc: "Web + Telegram" },
    { icon: <ShieldCheck />, title: "Защита", desc: "Шифрование" },
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white border-y border-border/40">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
              Функционал системы
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Полный набор инструментов для автоматизации медицинской документации.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="text-right text-sm font-mono text-muted-foreground">
              SYSTEM_VERSION: 2.0.4<br/>
              STATUS: ONLINE
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative bg-secondary/5 p-4 sm:p-6 md:p-8 hover:bg-secondary/20 transition-colors border border-transparent hover:border-border/50 overflow-hidden"
            >
              {/* Corner Accents on Hover */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="mb-3 sm:mb-4 md:mb-6 text-muted-foreground group-hover:text-primary transition-colors">
                <div className="w-5 h-5 sm:w-6 sm:h-6">{feature.icon}</div>
              </div>
              <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 md:mb-2">{feature.title}</h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
