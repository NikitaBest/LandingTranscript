import { Clock, Target, FolderCheck, Lock } from "lucide-react";

export default function BenefitsSummary() {
  const items = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Экономия времени",
      desc: "Сокращает рутинную документацию на 15–20 минут.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Точность",
      desc: "AI учитывает медицинские термины и сохраняет структуру.",
    },
    {
      icon: <FolderCheck className="w-8 h-8" />,
      title: "Порядок в истории",
      desc: "Вся информация автоматически сохраняется и доступна врачу.",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Безопасность",
      desc: "Пациент видит только итоговый отчёт — без аудио и черновиков.",
    },
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
