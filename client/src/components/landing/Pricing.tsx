import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "Бесплатно",
      features: ["5 консультаций в месяц", "PDF экспорт", "Публичные ссылки"],
      cta: "Попробовать",
      variant: "outline",
    },
    {
      name: "Pro",
      price: "2990 ₽",
      period: "/ мес",
      features: [
        "Безлимитные консультации",
        "История пациентов",
        "Доп. функции",
        "Приоритет обработки",
      ],
      cta: "Выбрать Pro",
      variant: "default",
      popular: true,
    },
    {
      name: "Clinic",
      price: "По запросу",
      features: [
        "Команда врачей",
        "Общая база пациентов",
        "Расширенные отчёты",
        "API интеграция",
      ],
      cta: "Связаться",
      variant: "outline",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Тарифы, подходящие для каждого врача
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col ${
                plan.popular
                  ? "border-primary shadow-xl scale-105 z-10"
                  : "border-border shadow-sm hover:shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Популярный выбор
                </div>
              )}
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                <div className="flex justify-center items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-6 pb-8">
                <Button
                  className="w-full rounded-full"
                  variant={plan.variant as "default" | "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
