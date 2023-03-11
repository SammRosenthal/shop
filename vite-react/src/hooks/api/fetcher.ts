type FetcherUrl = Parameters<typeof fetch>[0];
type FetcherOptions = Parameters<typeof fetch>[1];

async function fetcher<ResData = unknown>(url: FetcherUrl, options?: FetcherOptions): Promise<ResData> {
  const res = await fetch(url, options);

  // this will throw for anything 300+
  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  return await res.json();
}

export { fetcher };
