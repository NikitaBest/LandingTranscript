import { MessageCircle } from "lucide-react";
import {
  CONSENT_MARKETING_DOC,
  CONSENT_PROCESSING_DOC,
  POLICY_DOC_VIEW,
} from "@/lib/legal-links";

export default function Footer() {
  return (
    <footer id="footer" className="bg-white border-t border-border pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-6">
              <img 
                src="/OdontaLogo.svg" 
                alt="Odonta AI Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <span className="font-heading font-bold text-xl tracking-tight text-foreground">
                Odonta AI
              </span>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              Умный помощник для стоматологов. Автоматизируем рутину, чтобы вы
              могли сосредоточиться на лечении.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm sm:text-base">Поддержка</h4>
            <ul className="space-y-2 md:space-y-3 text-xs sm:text-sm text-muted-foreground">
              <li>
                <a 
                  href="https://t.me/odonta_ai_support" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Telegram </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 md:pt-8 text-center text-xs sm:text-sm text-muted-foreground space-y-3">
          <p>© {new Date().getFullYear()} Odonta AI. Все права защищены.</p>
          <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <a
              href={POLICY_DOC_VIEW}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline underline-offset-4"
            >
              Политика обработки ПД
            </a>
            <span className="text-border hidden sm:inline" aria-hidden>
              ·
            </span>
            <a
              href={CONSENT_PROCESSING_DOC}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline underline-offset-4"
            >
              Согласие на обработку ПД
            </a>
            <span className="text-border hidden sm:inline" aria-hidden>
              ·
            </span>
            <a
              href={CONSENT_MARKETING_DOC}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline underline-offset-4"
            >
              Согласие на рекламную рассылку
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
