interface IResponseDTO {
  rates: Record<string, number>;
}

export async function exchangeCurrency(
  value: number,
  from: string = "BRL",
  to: string = "USD"
): Promise<number | null> {
  try {
    const response = await fetch(`https://open.er-api.com/v6/latest/${from}`);
    const data: IResponseDTO = await response.json();

    if (response.ok) {
      const rateValue = data?.rates[to];

      if (rateValue) {
        return rateValue * value;
      }
    }

    return null;
  } catch (err) {
    return null;
  }
}
