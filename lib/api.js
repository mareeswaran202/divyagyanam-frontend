const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchAPI(endpoint) {
  const res = await fetch(`${API_URL}${endpoint}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}