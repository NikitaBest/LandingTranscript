import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { COOKIE_POLICY_DOC } from "@/lib/legal-links";

const STORAGE_KEY = "odonta_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== "true") {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] p-4 pb-[max(1rem,env(safe-area-inset-bottom))] pointer-events-none"
      role="dialog"
      aria-label="Уведомление об использовании cookie"
    >
      <div className="mx-auto max-w-4xl pointer-events-auto rounded-2xl border border-border bg-background/95 shadow-lg backdrop-blur-md p-4 sm:p-5 md:flex md:items-end md:gap-6">
        <p className="text-sm text-foreground leading-relaxed flex-1 mb-4 md:mb-0">
          Индивидуальный предприниматель Коростелев Александр Андреевич ИНН:
          312334497069 обрабатывает файлы cookie в соответствии с{" "}
          <a
            href={COOKIE_POLICY_DOC}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-2"
          >
            Политикой обработки персональных данных
          </a>
          , включая передачу данных, определённых в политике, третьим лицам.
          Нажимая кнопку «Соглашаюсь», вы даёте своё согласие на обработку файлов
          cookie. Вы можете запретить обработку файлов cookie в настройках Вашего
          браузера.
        </p>
        <Button
          type="button"
          onClick={accept}
          className="shrink-0 w-full md:w-auto rounded-full px-6"
        >
          Соглашаюсь
        </Button>
      </div>
    </div>
  );
}
