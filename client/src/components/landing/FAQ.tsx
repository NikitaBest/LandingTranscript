import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const PERSONAL_DATA_DOC_URL =
  "https://s3.twcstorage.ru/odonta/prod/documents/%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5_%D0%BD%D0%B0%C2%A0%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D1%83_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85_%D0%B4%D0%BB%D1%8F_%D0%B2%D1%80%D0%B0%D1%87%D0%B0_%D0%B8_%D0%BF%D0%B0%D1%86%D0%B8%D0%B5%D0%BD%D1%82%D0%B0.docx";
export default function FAQ() {
  const faqs = [
    {
      q: "Пациент видит всю информацию?",
      a: "Нет. Пациент видит только то, чем вы поделитесь: например, итоговые рекомендации или отчёт. Черновики, исходная запись и внутренние заметки остаются у врача.",
    },
    {
      q: "Как устроены тарифы и оплата?",
      a: "Оплата поминутная: вы выбираете пакет минут, а стоимость зависит от выбранного порога. Удобно, если нагрузка меняется — платите только за фактически использованное время.",
    },
    {
      q: "Сколько идёт обработка?",
      a: "Обычно 20–40 секунд в зависимости от длительности записи.",
    },
    {
      q: "Нужно ли пациенту подписывать соглашение об обработке персональных данных?",
      a: (
        <div className="space-y-3">
          <p>
            Да. Для работы с сервисом пациенту нужно подписать согласие на
            обработку персональных данных. Вы можете использовать готовый шаблон.
          </p>
          <Button
            asChild
            variant="outline"
            className="rounded-full text-sm px-4 h-9"
          >
            <a
              href={PERSONAL_DATA_DOC_URL}
              target="_blank"
              rel="noreferrer"
            >
              Скачать шаблон согласия
            </a>
          </Button>
        </div>
      ),
    },
    {
      q: "Нужна ли установка приложения?",
      a: "Нет. Сервис работает прямо в браузере — как на компьютере, так и на мобильном телефоне. Ничего устанавливать не нужно.",
    },
  ];

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Часто задаваемые вопросы
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full bg-white rounded-2xl shadow-sm border border-border/50 px-4 sm:px-6 py-2">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b-border/50 last:border-0">
              <AccordionTrigger className="text-left font-medium text-base sm:text-lg py-3 sm:py-4 hover:no-underline hover:text-primary transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-3 sm:pb-4 text-sm sm:text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Final CTA */}
        <div className="mt-12 sm:mt-16 md:mt-24 text-center">
          <div className="bg-primary/5 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-16 border border-primary/10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
              Попробуйте, как работает <br className="hidden sm:block" />
              <span className="text-primary">AI-ассистент для стоматолога</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-10 max-w-2xl mx-auto">
              Экономьте время, улучшайте качество документации и давайте
              пациентам чёткие рекомендации.
            </p>
            <Button 
              size="lg" 
              asChild
              className="rounded-full px-6 sm:px-8 md:px-10 h-12 sm:h-14 text-base sm:text-lg shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all w-full sm:w-auto"
            >
              <a href="https://ai.odonta.ru/" target="_blank" rel="noopener noreferrer">
                Перейти в приложение
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
