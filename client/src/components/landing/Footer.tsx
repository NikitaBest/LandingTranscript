import { Link } from "wouter";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-white border-t border-border pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
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
            <h4 className="font-bold mb-3 md:mb-4 text-sm sm:text-base">Продукт</h4>
            <ul className="space-y-2 md:space-y-3 text-xs sm:text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-colors">Функции</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a></li>
              <li><a href="#demo" className="hover:text-primary transition-colors">Примеры</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm sm:text-base">Компания</h4>
            <ul className="space-y-2 md:space-y-3 text-xs sm:text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
            </ul>
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

        <div className="border-t border-border pt-6 md:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Odonta AI. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
