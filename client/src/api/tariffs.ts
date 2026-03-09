export interface Tariff {
  minSeconds: number;
  minMinutes: number;
  pricePerSecond: number;
  pricePerMinuteDisplay: number;
}

export async function fetchTariffs(): Promise<Tariff[]> {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  if (!baseUrl) {
    throw new Error("VITE_API_BASE_URL is not configured");
  }

  const normalizedBaseUrl = baseUrl.replace(/\/$/, "");
  const response = await fetch(
    `${normalizedBaseUrl}/tenant/balance/tariff`,
    {
      method: "GET",
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch tariffs: ${response.status}`);
  }

  return response.json();
}

