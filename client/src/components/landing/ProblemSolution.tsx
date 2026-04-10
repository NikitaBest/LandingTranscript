import { useState } from "react";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ProblemSolution() {
  const solutions = [
    {
      title: "Автоматическая транскрибация речи",
      details:
        "Система распознаёт запись консультации и превращает разговор врача и пациента в структурированный текст.",
    },
    {
      title: "Структурированный медицинский отчёт",
      details:
        "Автоматически формируются ключевые разделы: жалобы, объективный статус, план лечения и рекомендации.",
    },
    {
      title: "Экономия до 20 минут на каждом пациенте",
      details:
        "Снижается объём ручной документации после приёма, поэтому больше времени остаётся на пациента.",
    },
    {
      title: "PDF и публичная ссылка для пациента",
      details:
        "Итоговый результат удобно передать пациенту в виде PDF или по защищённой ссылке.",
    },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Problem - Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Ведение документации забирает время у врача
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              После каждой консультации нужно формировать рекомендации, писать
              отчёты, вести карточки пациентов. Это отвлекает от лечения и
              снижает качество сервиса.
            </p>
          </motion.div>

          {/* Solution - Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 gap-3 md:gap-4 items-start">
              {solutions.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <Card
                    key={index}
                    className="border-none shadow-md hover:shadow-lg transition-shadow"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full text-left"
                    >
                      <CardContent className="p-4 md:p-6 flex flex-col gap-3 md:gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <Check className="w-5 h-5" />
                        </div>
                        <span className="font-medium text-foreground">{item.title}</span>
                        {isOpen && (
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.details}
                          </p>
                        )}
                      </CardContent>
                    </button>
                  </Card>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
