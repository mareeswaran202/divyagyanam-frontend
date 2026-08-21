// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// export async function fetchAPI(endpoint) {
//   const res = await fetch(`${API_URL}${endpoint}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

export async function fetchAPI(endpoint) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`);

  if (!res.ok) {
    const errorText = await res.text();

    console.error("API ERROR");
    console.error("URL:", `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`);
    console.error("STATUS:", res.status);
    console.error("RESPONSE:", errorText);

    throw new Error("Failed to fetch data");
  }

  return res.json();
}