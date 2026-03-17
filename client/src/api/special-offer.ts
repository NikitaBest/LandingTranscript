export type SpecialOfferApplicationRequest = {
  clinicInfo: string;
  contactPhone: string;
  requestDescription: string;
};

export async function submitSpecialOfferApplication(
  payload: SpecialOfferApplicationRequest,
): Promise<void> {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  if (!baseUrl) {
    throw new Error("VITE_API_BASE_URL is not configured");
  }

  const normalizedBaseUrl = baseUrl.replace(/\/$/, "");
  const response = await fetch(
    `${normalizedBaseUrl}/app/special-offer-application`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to submit application: ${response.status}`);
  }
}

