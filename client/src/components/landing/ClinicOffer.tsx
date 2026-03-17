import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitSpecialOfferApplication } from "@/api/special-offer";

type FormState = {
  clinicName: string;
  inn: string;
  phone: string;
  message: string;
};

const initialState: FormState = {
  clinicName: "",
  inn: "",
  phone: "",
  message: "",
};

export default function ClinicOffer() {
  const { toast } = useToast();
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const rawPhoneDigits = useMemo(
    () => form.phone.replace(/\D/g, ""),
    [form.phone],
  );

  const ruPhoneDigits = useMemo(() => {
    // Разрешаем ввод в популярных форматах:
    // - +7XXXXXXXXXX
    // - 8XXXXXXXXXX
    // - XXXXXXXXXX (10 цифр без кода страны) -> считаем как Россия (+7)
    if (rawPhoneDigits.length === 10) return `7${rawPhoneDigits}`;
    if (rawPhoneDigits.length === 11 && rawPhoneDigits.startsWith("8")) {
      return `7${rawPhoneDigits.slice(1)}`;
    }
    return rawPhoneDigits;
  }, [rawPhoneDigits]);

  const phoneIsValid = useMemo(() => {
    // Валидируем именно российский номер: строго 11 цифр и начинается на 7
    return ruPhoneDigits.length === 11 && ruPhoneDigits.startsWith("7");
  }, [ruPhoneDigits]);

  const phoneError = useMemo(() => {
    if (form.phone.trim().length === 0) return null;
    if (phoneIsValid) return null;
    return "Введите российский номер телефона (10–11 цифр, например: +7 999 123-45-67).";
  }, [form.phone, phoneIsValid]);

  const canSubmit = useMemo(() => {
    const clinicNameOk = form.clinicName.trim().length > 0;
    const phoneOk = form.phone.trim().length > 0 && phoneIsValid;
    const messageOk = form.message.trim().length > 0;
    return clinicNameOk && phoneOk && messageOk && !submitting;
  }, [form, phoneIsValid, submitting]);

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function normalizePhoneInput(raw: string) {
    // Разрешаем привычные символы форматирования, но не даём ввести "мусор".
    return raw.replace(/[^\d+()\s-]/g, "");
  }

  function formatRuPhone(digits11: string) {
    // digits11: 7XXXXXXXXXX
    const d = digits11.replace(/\D/g, "");
    if (d.length !== 11 || !d.startsWith("7")) return form.phone;
    const p1 = d.slice(1, 4);
    const p2 = d.slice(4, 7);
    const p3 = d.slice(7, 9);
    const p4 = d.slice(9, 11);
    return `+7 (${p1}) ${p2}-${p3}-${p4}`;
  }

  function resizeMessageTextarea() {
    const el = messageRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 240)}px`;
  }

  useEffect(() => {
    resizeMessageTextarea();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.message]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setSubmitting(true);

    try {
      const clinicName = form.clinicName.trim();
      const inn = form.inn.trim();
      const clinicInfo = inn.length > 0 ? `${clinicName}, ИНН ${inn}` : clinicName;

      await submitSpecialOfferApplication({
        clinicInfo,
        contactPhone: `+${ruPhoneDigits}`,
        requestDescription: form.message.trim(),
      });

      toast({
        title: "Заявка отправлена",
        description: "Мы свяжемся с вами в ближайшее время.",
      });

      setForm(initialState);
    } catch (err) {
      toast({
        title: "Не удалось отправить заявку",
        description: "Проверьте соединение и попробуйте ещё раз.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="clinic-offer" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Спецпредложение для клиник
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Оставьте заявку — обсудим условия под вашу клинику, объёмы и
            интеграции.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto border-border shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">Форма заявки</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="grid gap-5">
              <div className="grid gap-2">
                <Label htmlFor="clinicName">Название клиники</Label>
                <Input
                  id="clinicName"
                  value={form.clinicName}
                  onChange={(e) => onChange("clinicName", e.target.value)}
                  placeholder="Например: Стоматология «Здоровая улыбка»"
                  autoComplete="organization"
                  required
                />
              </div>

              <div className="grid gap-2 md:grid-cols-2 md:gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="inn">ИНН (опционально)</Label>
                  <Input
                    id="inn"
                    value={form.inn}
                    onChange={(e) => onChange("inn", e.target.value)}
                    placeholder="Например: 7707083893"
                    inputMode="numeric"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Телефон для связи</Label>
                  <Input
                    id="phone"
                    value={form.phone}
                    onChange={(e) => onChange("phone", normalizePhoneInput(e.target.value))}
                    onBlur={() => {
                      if (phoneIsValid) {
                        onChange("phone", formatRuPhone(ruPhoneDigits));
                      }
                    }}
                    placeholder="+7 (___) ___-__-__"
                    inputMode="tel"
                    autoComplete="tel"
                    aria-invalid={!!phoneError}
                    required
                  />
                  {phoneError && (
                    <p className="text-sm text-destructive">{phoneError}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="message">Опишите ваш запрос или предложение</Label>
                <Textarea
                  id="message"
                  ref={messageRef}
                  value={form.message}
                  onChange={(e) => {
                    onChange("message", e.target.value);
                    resizeMessageTextarea();
                  }}
                  className="resize-none"
                  rows={3}
                  placeholder="Например: хотим подключить 10 врачей, нужна интеграция и условия на объём."
                  required
                />
              </div>

              <div className="flex justify-center pt-2">
                <Button
                  type="submit"
                  className="rounded-full px-8"
                  disabled={!canSubmit}
                >
                  {submitting ? "Отправляем..." : "Отправить заявку"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

