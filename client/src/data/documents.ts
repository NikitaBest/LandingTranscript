export type DocumentCategory = "product" | "legal";

export type SiteDocument = {
  slug: string;
  title: string;
  filename: string;
  description: string;
  category: DocumentCategory;
};

export const siteDocuments: SiteDocument[] = [
  {
    slug: "rukovodstvo-polzovatelya",
    title: "Руководство пользователя",
    filename: "Odonta Руководство_пользователя.pdf",
    description:
      "Подробное руководство по работе с сервисом Odonta AI для врачей.",
    category: "product",
  },
  {
    slug: "instrukciya-po-ustanovke",
    title: "Инструкция по установке",
    filename: "Odonta Инструкция по установке.pdf",
    description:
      "Инструкция по началу работы и системным требованиям для использования сервиса.",
    category: "product",
  },
  {
    slug: "opisanie-funkcionalnyh-harakteristik",
    title: "Описание функциональных характеристик",
    filename: "Odonta Описание_функциональных_характеристик.pdf",
    description:
      "Описание возможностей и функциональных характеристик программного обеспечения.",
    category: "product",
  },
  {
    slug: "politika-obrabotki-pd",
    title: "Политика обработки персональных данных",
    filename: "Политика обработки ПД.docx",
    description: "Политика обработки персональных данных сервиса Odonta AI.",
    category: "legal",
  },
  {
    slug: "soglasie-obrabotka-pd",
    title: "Согласие на обработку персональных данных",
    filename: "Согласие на обработку ПД.docx",
    description: "Шаблон согласия на обработку персональных данных.",
    category: "legal",
  },
  {
    slug: "soglasie-reklamnaya-rassylka",
    title: "Согласие на рекламную рассылку",
    filename: "Согласие на рекламную рассылку.docx",
    description: "Шаблон согласия на получение рекламных материалов.",
    category: "legal",
  },
];

const categoryLabels: Record<DocumentCategory, string> = {
  product: "Документация по продукту",
  legal: "Юридические документы",
};

export function getDocumentBySlug(slug: string): SiteDocument | undefined {
  return siteDocuments.find((doc) => doc.slug === slug);
}

export function getDocumentPageUrl(slug: string): string {
  return `/documents/${slug}`;
}

export function getDocumentFileUrl(filename: string): string {
  return `/documents/${encodeURIComponent(filename)}`;
}

export function getDocumentFileExtension(filename: string): string {
  const parts = filename.split(".");
  return parts.length > 1 ? parts[parts.length - 1].toUpperCase() : "FILE";
}

export function getDocumentsByCategory(category: DocumentCategory): SiteDocument[] {
  return siteDocuments.filter((doc) => doc.category === category);
}

export function getCategoryLabel(category: DocumentCategory): string {
  return categoryLabels[category];
}
