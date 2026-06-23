import politikaObrabotkiPd from "./politika-obrabotki-pd.txt?raw";
import soglasieObrabotkaPd from "./soglasie-obrabotka-pd.txt?raw";
import soglasieReklamnayaRassylka from "./soglasie-reklamnaya-rassylka.txt?raw";

const documentContents: Record<string, string> = {
  "politika-obrabotki-pd": politikaObrabotkiPd,
  "soglasie-obrabotka-pd": soglasieObrabotkaPd,
  "soglasie-reklamnaya-rassylka": soglasieReklamnayaRassylka,
};

export function getDocumentInlineContent(slug: string): string | null {
  return documentContents[slug] ?? null;
}
