import { Link } from "wouter";
import { FileText, ChevronRight } from "lucide-react";
import DocumentsLayout from "@/components/landing/DocumentsLayout";
import { Card, CardContent } from "@/components/ui/card";
import {
  getCategoryLabel,
  getDocumentFileExtension,
  getDocumentsByCategory,
  type DocumentCategory,
} from "@/data/documents";

const categories: DocumentCategory[] = ["product", "legal"];

function DocumentGroup({ category }: { category: DocumentCategory }) {
  const docs = getDocumentsByCategory(category);

  return (
    <section className="space-y-4">
      <h2 className="text-lg sm:text-xl font-semibold">
        {getCategoryLabel(category)}
      </h2>
      <ul className="grid gap-3">
        {docs.map((doc) => (
          <li key={doc.slug}>
            <Link href={`/documents/${doc.slug}`}>
              <Card className="border-border shadow-sm hover:border-primary/30 hover:shadow-md transition-all">
                <CardContent className="p-4 sm:p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg border border-border bg-muted/40 flex items-center justify-center shrink-0">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-medium text-sm sm:text-base">
                        {doc.title}
                      </h3>
                      <span className="text-[10px] sm:text-xs uppercase tracking-wide text-muted-foreground border border-border rounded px-1.5 py-0.5">
                        {getDocumentFileExtension(doc.filename)}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-2">
                      {doc.description}
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0" />
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Documents() {
  return (
    <DocumentsLayout>
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <div className="mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Документы
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Официальная документация и юридические материалы сервиса Odonta AI.
            Выберите документ, чтобы открыть страницу и скачать файл.
          </p>
        </div>

        <div className="space-y-10">
          {categories.map((category) => (
            <DocumentGroup key={category} category={category} />
          ))}
        </div>
      </div>
    </DocumentsLayout>
  );
}
