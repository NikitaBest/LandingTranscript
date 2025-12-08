import { motion } from "framer-motion";
import reportImage from "@assets/generated_images/dental_medical_report_ui_mockup.png";

export default function DemoReport() {
  return (
    <section id="demo" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Пример результата, который получает врач
            </h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-secondary/30 rounded-2xl border border-secondary">
                <h4 className="font-bold text-primary mb-2">Жалобы:</h4>
                <p className="text-muted-foreground mb-4">
                  Дискомфорт от холодного/сладкого, эпизод острой боли.
                </p>
                
                <h4 className="font-bold text-primary mb-2">Объективно:</h4>
                <p className="text-muted-foreground mb-4">
                  Глубокая кариозная полость 3.6, болезненное зондирование.
                </p>
                
                <h4 className="font-bold text-primary mb-2">План лечения:</h4>
                <p className="text-muted-foreground mb-4">
                  Эндодонтическое лечение, обработка и пломбирование каналов, восстановление коронки.
                </p>
                
                <h4 className="font-bold text-primary mb-2">Итог:</h4>
                <p className="text-muted-foreground">
                  Сформирован структурированный план лечения, выданы рекомендации по гигиене.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
             {/* Abstract Background Blotches */}
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-gray-100 rounded-full blur-3xl opacity-50" />
             <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gray-200 rounded-full blur-3xl opacity-50" />

            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border">
              <img 
                src={reportImage} 
                alt="Medical Report Example" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
