interface DocumentTextContentProps {
  content: string;
}

export default function DocumentTextContent({ content }: DocumentTextContentProps) {
  const paragraphs = content.split(/\n{2,}/).filter(Boolean);

  return (
    <article className="rounded-2xl border border-border bg-muted/20 p-5 sm:p-8">
      <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-foreground">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="whitespace-pre-wrap">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
