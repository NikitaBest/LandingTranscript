import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  const faqs = [
    {
      q: "Пациент видит всю информацию?",
      a: "Нет, только итоговый отчёт. Черновики, аудиозаписи и ваши личные заметки остаются доступны только вам.",
    },
    {
      q: "Можно ли работать без привязки к пациенту?",
      a: "Да, консультация создаётся и без карточки пациента. Вы можете просто записать аудио и получить отчёт.",
    },
    {
      q: "Сколько идёт обработка?",
      a: "Обычно 20–40 секунд в зависимости от длительности записи.",
    },
    {
      q: "Какие форматы экспорта доступны?",
      a: "Вы можете скопировать текст, скачать PDF файл или отправить пациенту защищенную публичную ссылку.",
    },
    {
      q: "Нужна ли установка?",
      a: "Нет, всё работает в браузере и Telegram. Ничего скачивать и устанавливать не нужно.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Часто задаваемые вопросы
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full bg-white rounded-2xl shadow-sm border border-border/50 px-6 py-2">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b-border/50 last:border-0">
              <AccordionTrigger className="text-left font-medium text-lg py-4 hover:no-underline hover:text-primary transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Final CTA */}
        <div className="mt-24 text-center">
          <div className="bg-primary/5 rounded-3xl p-10 md:p-16 border border-primary/10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Попробуйте, как работает <br />
              <span className="text-primary">AI-ассистент для стоматолога</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Экономьте время, улучшайте качество документации и давайте
              пациентам чёткие рекомендации.
            </p>
            <Button size="lg" className="rounded-full px-10 h-14 text-lg shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all">
              Перейти в приложение
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
