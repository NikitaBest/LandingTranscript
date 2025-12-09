import { Clock, Target, FolderCheck, Lock } from "lucide-react";

export default function BenefitsSummary() {
  const items = [
    {
      icon: <Clock className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Экономия времени",
      desc: "Сокращает рутинную документацию на 15–20 минут.",
    },
    {
      icon: <Target className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Точность",
      desc: "AI учитывает медицинские термины и сохраняет структуру.",
    },
    {
      icon: <FolderCheck className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Порядок в истории",
      desc: "Вся информация автоматически сохраняется и доступна врачу.",
    },
    {
      icon: <Lock className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Безопасность",
      desc: "Пациент видит только итоговый отчёт — без аудио и черновиков.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 flex items-center justify-center mb-3 md:mb-4 shrink-0">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg md:text-xl mb-2">{item.title}</h3>
              <p className="text-sm md:text-base text-primary-foreground/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
