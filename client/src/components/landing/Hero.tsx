import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/dental_ai_interface_process_flow.png";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-sm font-medium mb-6">
              AI-ассистент для стоматологов
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-foreground">
              AI-сервис, который превращает консультации стоматолога в{" "}
              <span className="text-primary">готовые отчёты за 30 секунд</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Запишите консультацию — сервис сам расшифрует речь, структурирует
              информацию и создаст медицинский отчёт, PDF и ссылку для пациента.
            </p>
            <Button
              size="lg"
              className="rounded-full px-8 h-12 text-base shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-105"
            >
              Перейти в приложение
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-white">
            <img
              src={heroImage}
              alt="Interface Mockup"
              className="w-full h-auto object-cover"
            />
            {/* Overlay Gradient for smooth blending if needed */}
            <div className="absolute inset-0 bg-linear-to-t from-white/10 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
