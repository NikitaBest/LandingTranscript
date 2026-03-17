import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";

const PERSONAL_DATA_DOC_URL =
  "https://s3.twcstorage.ru/odonta/prod/documents/%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5_%D0%BD%D0%B0%C2%A0%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D1%83_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85_%D0%B4%D0%BB%D1%8F_%D0%B2%D1%80%D0%B0%D1%87%D0%B0_%D0%B8_%D0%BF%D0%B0%D1%86%D0%B8%D0%B5%D0%BD%D1%82%D0%B0.docx";

export default function PersonalDataDoc() {
  return (
    <section id="personal-data-doc" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
            Шаблон документа о персональных данных
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Для работы с сервисом пациенту необходимо подписать согласие на
            обработку персональных данных (для врача и пациента).
          </p>
        </div>

        <Card className="max-w-3xl mx-auto border-border shadow-sm">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg border border-border bg-muted/40 flex items-center justify-center">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg sm:text-xl">
                  Согласие на обработку персональных данных
                </CardTitle>
                <div className="text-sm text-muted-foreground">Формат: .docx</div>
              </div>
            </div>

            <Button asChild className="rounded-full w-full sm:w-auto">
              <a
                href={PERSONAL_DATA_DOC_URL}
                target="_blank"
                rel="noreferrer"
              >
                <Download className="h-4 w-4" />
                Скачать
              </a>
            </Button>
          </CardHeader>
          <CardContent className="pt-0">
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>— Заполните данные врача и пациента</li>
              <li>— Подпишите и храните в карте пациента</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

