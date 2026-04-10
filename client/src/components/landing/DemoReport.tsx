import { useState } from "react";
import { motion } from "framer-motion";

export default function DemoReport() {
  const [openPreview, setOpenPreview] = useState<string | null>(null);

  return (
    <section id="demo" className="py-16 sm:py-24 md:py-32 bg-secondary/10 relative">
      {/* Decorative tech line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-linear-to-b from-transparent to-border/50" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 md:mb-8">
              <span className="text-xs font-mono text-primary/60 border border-primary/20 px-2 py-1 rounded mb-3 md:mb-4 inline-block">
                ПРИМЕР ОТЧЁТА
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
                Что формирует система
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Сервис автоматически выделяет ключевые элементы консультации и
                превращает их в структурированный медицинский документ.
              </p>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              {[
                {
                  label: "Жалобы",
                  text: "AI автоматически выделяет жалобы и ключевые симптомы пациента.",
                },
                {
                  label: "Объективный статус",
                  text: "Формируется объективный статус и клиническая картина приёма.",
                },
                {
                  label: "План лечения",
                  text: "Создаётся структурированный план лечения и последующие шаги.",
                },
                {
                  label: "Карта пациента и рекомендации",
                  text: "Заполняется карта пациента и даются рекомендации по AI‑оценке консультации (Калгари‑Кембридж).",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="rounded-xl bg-white border border-border/50 hover:border-primary/30 transition-colors shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenPreview(openPreview === item.label ? null : item.label)
                    }
                    className="w-full text-left p-3 md:p-4 flex items-center gap-3 md:gap-4"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                    <div>
                      <span className="block font-bold text-xs sm:text-sm text-foreground">
                        {item.label}
                      </span>
                      <span className="text-xs sm:text-sm text-muted-foreground">
                        {item.text}
                      </span>
                    </div>
                  </button>

                  {item.label === "Жалобы" && openPreview === "Жалобы" && (
                    <div className="px-3 pb-3 md:px-4 md:pb-4">
                      <div className="rounded-2xl border border-border bg-secondary/20 p-4 md:p-5">
                        <h4 className="font-semibold text-sm md:text-base mb-3">
                          Жалобы
                        </h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>— пища застревает между зубами;</li>
                          <li>
                            — ломота и боль в предпоследнем зубе (провокация
                            болью от холодного);
                          </li>
                          <li>
                            — периодическое воспаление под мостовидным
                            протезом;
                          </li>
                          <li>
                            — общее ощущение дискомфорта, связанное с функцией
                            жевания и состоянием зубов;
                          </li>
                          <li>— в прошлом — бруксизм;</li>
                          <li>— курение (около пачки в день).</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {item.label === "Объективный статус" &&
                    openPreview === "Объективный статус" && (
                      <div className="px-3 pb-3 md:px-4 md:pb-4">
                        <div className="rounded-2xl border border-border bg-secondary/20 p-4 md:p-5">
                          <h4 className="font-semibold text-sm md:text-base mb-3">
                            Объективный статус
                          </h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>— стирание зубов, выраженный зубной налёт;</li>
                            <li>
                              — множественные пломбы и клиновидные дефекты
                              эмали;
                            </li>
                            <li>
                              — признаки хронического воспаления дёсен,
                              гиперкератоз;
                            </li>
                            <li>
                              — локальная атрофия костной ткани в зоне
                              отсутствующих зубов;
                            </li>
                            <li>
                              — признаки перегрузки зубов и начальной
                              подвижности отдельных единиц.
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}

                  {item.label === "План лечения" &&
                    openPreview === "План лечения" && (
                      <div className="px-3 pb-3 md:px-4 md:pb-4">
                        <div className="rounded-2xl border border-border bg-secondary/20 p-4 md:p-5">
                          <h4 className="font-semibold text-sm md:text-base mb-3">
                            План лечения
                          </h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>
                              — провести диагностику: прицельные снимки и
                              оценку состояния опорных зубов;
                            </li>
                            <li>
                              — выполнить профессиональную гигиену и
                              противовоспалительную терапию дёсен;
                            </li>
                            <li>
                              — устранить очаги инфекции и восстановить
                              повреждённые зубы;
                            </li>
                            <li>
                              — скорректировать/заменить несостоятельный
                              мостовидный протез;
                            </li>
                            <li>
                              — определить дальнейшее ортопедическое лечение и
                              график контрольных визитов.
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}

                  {item.label === "Карта пациента и рекомендации" &&
                    openPreview === "Карта пациента и рекомендации" && (
                      <div className="px-3 pb-3 md:px-4 md:pb-4">
                        <div className="rounded-2xl border border-border bg-secondary/20 p-4 md:p-5 space-y-4">
                          <div>
                            <h4 className="font-semibold text-sm md:text-base mb-2">
                              Карта пациента
                            </h4>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                              <li>— жалобы и анамнез заполняются автоматически;</li>
                              <li>
                                — фиксируются объективный статус и ключевые
                                находки;
                              </li>
                              <li>
                                — формируется план лечения и задачи на следующий
                                визит.
                              </li>
                            </ul>
                          </div>

                          <div className="border-t border-border pt-4">
                            <h4 className="font-semibold text-sm md:text-base mb-2">
                              Рекомендации (AI‑оценка консультации)
                            </h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li>
                                <span className="font-medium text-foreground">
                                  Что сделано хорошо:
                                </span>{" "}
                                врач подробно объяснил пациенту этапы
                                консультации и план действий.
                              </li>
                              <li>
                                <span className="font-medium text-foreground">
                                  Что можно усилить:
                                </span>{" "}
                                делать более структурные резюме в конце приёма
                                и чаще проверять, всё ли пациент понял.
                              </li>
                              <li>
                                <span className="font-medium text-foreground">
                                  Практический совет:
                                </span>{" "}
                                использовать простые формулировки и кратко
                                повторять ключевые шаги лечения.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative perspective-1000 mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-[900px] mx-auto px-2 sm:px-4">
              <img 
                src="/2.svg" 
                alt="Пример медицинского отчёта в интерфейсе" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
