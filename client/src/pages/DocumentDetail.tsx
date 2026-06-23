import { Link, useRoute } from "wouter";
import { ArrowLeft, Download, FileText } from "lucide-react";
import DocumentsLayout from "@/components/landing/DocumentsLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NotFound from "@/pages/not-found";
import {
  getDocumentBySlug,
  getDocumentFileExtension,
  getDocumentFileUrl,
  getCategoryLabel,
} from "@/data/documents";
import { getDocumentInlineContent } from "@/content/documents";
import DocumentTextContent from "@/components/landing/DocumentTextContent";

export default function DocumentDetail() {
  const [, params] = useRoute("/documents/:slug");
  const slug = params?.slug ?? "";
  const doc = getDocumentBySlug(slug);
  const inlineContent = getDocumentInlineContent(slug);

  if (!doc) {
    return <NotFound />;
  }

  const fileUrl = getDocumentFileUrl(doc.filename);
  const extension = getDocumentFileExtension(doc.filename);
  const isPdf = extension === "PDF";

  return (
    <DocumentsLayout>
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <Link
          href="/documents"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Все документы
        </Link>

        <Card className="border-border shadow-sm">
          <CardContent className="p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="h-12 w-12 rounded-xl border border-border bg-muted/40 flex items-center justify-center shrink-0">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">
                  {getCategoryLabel(doc.category)} · {extension}
                </p>
                <h1 className="text-xl sm:text-2xl font-bold">{doc.title}</h1>
              </div>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
              {doc.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button asChild className="rounded-full">
                <a href={fileUrl} download={doc.filename}>
                  <Download className="h-4 w-4" />
                  Скачать документ
                </a>
              </Button>
              {isPdf && (
                <Button asChild variant="outline" className="rounded-full">
                  <a href={fileUrl} target="_blank" rel="noopener noreferrer">
                    Открыть в браузере
                  </a>
                </Button>
              )}
            </div>

            {inlineContent && <DocumentTextContent content={inlineContent} />}
          </CardContent>
        </Card>
      </div>
    </DocumentsLayout>
  );
}
