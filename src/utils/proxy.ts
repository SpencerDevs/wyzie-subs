/** @format */

export const getValidProxy = async () => {
  try {
    const data = await useStorage("assets:server").getItem("proxies.json");
    const parsedData = typeof data === "string" ? JSON.parse(data) : data;
    const randomIndex = Math.floor(Math.random() * parsedData.proxies.length);
    return parsedData.proxies[randomIndex];
  } catch (error) {
    console.error("Error getting valid proxy:", error);
    throw error;
  }
};

export async function proxyFetch(
  url: string,
  options?: RequestInit,
  retryCount: number = 8,
): Promise<Response> {
  try {
    const proxy = await getValidProxy();
    const proxyUrl = new URL(proxy);
    const defaultHeaders = {
      Referer: "",
      Origin: "",
    };
    proxyUrl.searchParams.set("destination", url);
    const proxyOptions = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options?.headers,
      },
    };
    return fetch(proxyUrl.toString(), proxyOptions);
  } catch (error) {
    if (retryCount > 0) {
      return proxyFetch(url, options, retryCount - 1);
    } else {
      throw error;
    }
  }
}
