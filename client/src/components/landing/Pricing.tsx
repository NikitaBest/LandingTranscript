import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { fetchTariffs, type Tariff } from "@/api/tariffs";

interface TariffWithId extends Tariff {
  id: number;
}

export default function Pricing() {
  const [tariffs, setTariffs] = useState<TariffWithId[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        const data = await fetchTariffs();
        if (cancelled) return;

        const withIds: TariffWithId[] = data.map((tariff, index) => ({
          ...tariff,
          id: index,
        }));

        setTariffs(withIds);
        setError(null);
      } catch (err) {
        if (cancelled) return;
        setError("Не удалось загрузить тарифы. Попробуйте обновить страницу.");
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void load();

    return () => {
      cancelled = true;
    };
  }, []);

  const hasTariffs = tariffs.length > 0;

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Оплачивайте только использованные минуты
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Гибкая поминутная оплата консультаций: покупаете нужный объём времени,
            а платите лишь за фактически проведённые разговоры с пациентами.
          </p>
        </div>

        {loading && !hasTariffs && (
          <div className="text-center text-muted-foreground">
            Загрузка тарифов...
          </div>
        )}

        {error && !hasTariffs && !loading && (
          <div className="text-center text-red-500 text-sm">{error}</div>
        )}

        {hasTariffs && (
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tariffs.map((tariff) => {
              const minutesLabel = new Intl.NumberFormat("ru-RU").format(
                tariff.minMinutes,
              );
              const pricePerMinuteLabel = new Intl.NumberFormat("ru-RU", {
                maximumFractionDigits: 2,
              }).format(tariff.pricePerMinuteDisplay);

              return (
                <Card
                  key={tariff.id}
                  className="relative flex flex-col border-border shadow-sm hover:shadow-md"
                >
                  <CardHeader className="text-center pt-8">
                    <CardTitle className="text-xl mb-2">
                      Пакет от {minutesLabel} мин
                    </CardTitle>
                    <div className="flex justify-center items-baseline gap-1">
                      <span className="text-4xl font-bold">
                        {pricePerMinuteLabel} ₽
                      </span>
                      <span className="text-muted-foreground text-base">
                        / мин
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm">
                          Минимальный пакет: {minutesLabel} минут
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm">
                          Стоимость: {pricePerMinuteLabel} ₽ за минуту
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-6 pb-8">
                    <Button className="w-full rounded-full">
                      Выбрать пакет
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

