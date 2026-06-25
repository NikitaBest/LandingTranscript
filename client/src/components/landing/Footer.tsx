import { MessageCircle, FileText, Mail, Phone, Clock } from "lucide-react";
import { Link } from "wouter";
import {
  getDocumentBySlug,
  getDocumentFileUrl,
  getDocumentPageUrl,
} from "@/data/documents";

const footerProductDocuments = [
  { slug: "rukovodstvo-polzovatelya", label: "Руководство пользователя" },
  { slug: "instrukciya-po-ustanovke", label: "Инструкция по установке" },
  {
    slug: "opisanie-funkcionalnyh-harakteristik",
    label: "Описание функциональных характеристик",
  },
] as const;

export default function Footer() {
  return (
    <footer id="footer" className="bg-white border-t border-border pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          <div>
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

          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm sm:text-base">Документы</h4>
            <ul className="space-y-2 md:space-y-3 text-xs sm:text-sm text-muted-foreground">
              {footerProductDocuments.map(({ slug, label }) => {
                const doc = getDocumentBySlug(slug);
                if (!doc) return null;

                return (
                  <li key={slug}>
                    <a
                      href={getDocumentFileUrl(doc.filename)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      <FileText className="w-4 h-4" />
                      <span>{label}</span>
                    </a>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/documents"
                  className="hover:text-primary transition-colors inline-flex items-center gap-2 font-medium text-foreground/80"
                >
                  <span>Все документы →</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm sm:text-base">Контакты</h4>
            <ul className="space-y-2 md:space-y-3 text-xs sm:text-sm text-muted-foreground">
              <li className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Пн–Пт, 10:00–19:00 (МСК)</span>
              </li>
              <li>
                <a
                  href="tel:+79251547189"
                  className="hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>+7 (925) 154-71-89</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:drkorostelev@mail.ru"
                  className="hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>drkorostelev@mail.ru</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:ontheknee.dev@gmail.com"
                  className="hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>ontheknee.dev@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 md:pt-8 text-center text-xs sm:text-sm text-muted-foreground space-y-3">
          <p>© {new Date().getFullYear()} Odonta AI. Все права защищены.</p>
          <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <Link
              href={getDocumentPageUrl("politika-obrabotki-pd")}
              className="hover:text-primary transition-colors underline underline-offset-4"
            >
              Политика обработки ПД
            </Link>
            <span className="text-border hidden sm:inline" aria-hidden>
              ·
            </span>
            <Link
              href={getDocumentPageUrl("soglasie-obrabotka-pd")}
              className="hover:text-primary transition-colors underline underline-offset-4"
            >
              Согласие на обработку ПД
            </Link>
            <span className="text-border hidden sm:inline" aria-hidden>
              ·
            </span>
            <Link
              href={getDocumentPageUrl("soglasie-reklamnaya-rassylka")}
              className="hover:text-primary transition-colors underline underline-offset-4"
            >
              Согласие на рекламную рассылку
            </Link>
          </nav>
        </div>

        <div className="border-t border-border pt-6 md:pt-8 text-[10px] sm:text-xs text-muted-foreground/70 leading-relaxed max-w-4xl mx-auto text-center">
          <p>
            Исключительные права на ПО полностью принадлежат Индивидуальному
            предпринимателю Коростелеву Александру Андреевичу, ИНН&nbsp;312334497069,
            ОГРН&nbsp;323508100020560, адрес: 140002, Россия, Московская обл.,
            г.&nbsp;Люберцы, ул.&nbsp;Кирова, д.&nbsp;9, корп.&nbsp;2, кв.&nbsp;375.
          </p>
          <p className="mt-2">
            ОКВЭД: 62.01 — Разработка компьютерного программного обеспечения.
            ПО распространяется в виде интернет-сервиса, специальные действия по
            установке ПО на стороне пользователя не требуются, общее описание
            системных требований содержится в инструкции.
          </p>
        </div>
      </div>
    </footer>
  );
}
