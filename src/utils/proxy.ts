export const getValidProxy = defineCachedFunction(
  async () => {
    try {
      const data = await useStorage("assets:server").getItem("proxies.json");
      const parsedData = typeof data === "string" ? JSON.parse(data) : data;
      const randomIndex = Math.floor(Math.random() * parsedData.proxies.length);
      return parsedData.proxies[randomIndex];
    } catch (error) {
      console.error("Error getting valid proxy:", error);
      throw error;
    }
  },
  { maxAge: 5 }, // Cache results for 5 seconds
);

export async function proxyFetch(
  url: string,
  options?: RequestInit,
  retryCount: number = 8,
): Promise<Response> {
  const defaultHeaders = {
    Referer: "",
    Origin: "",
  };

  try {
    const proxy = await getValidProxy();
    const proxyUrl = new URL(proxy);
    proxyUrl.searchParams.set("destination", url);
    const proxyOptions = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options?.headers,
        "Proxy-Authorization": `Basic ${btoa(proxy)}`,
      },
    };

    const res = await fetch(proxyUrl.toString(), proxyOptions);
    const text = await res.text();

    if (res.status === 429 || text.includes("429 Too Many Requests")) {
      if (retryCount > 0) {
        console.log(`Ratelimited. Retrying with a new proxy... #${retryCount}`);
        return proxyFetch(url, options, retryCount - 1);
      } else {
        throw new Error("Failed to fetch after multiple retries due to 429 Too Many Requests.");
      }
    }

    return new Response(text, {
      status: res.status,
      statusText: res.statusText,
      headers: res.headers,
    });
  } catch (error) {
    console.error("Error in proxyFetch:", error);
    throw error;
  }
}
