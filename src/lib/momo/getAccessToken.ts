import axios from "axios";

let tokenCache: { token: string; expiry: number } | null = null;

export async function getMomoAccessToken(): Promise<string> {
  const now = Date.now();

  if (tokenCache && tokenCache.expiry > now) return tokenCache.token;

  const basicToken = Buffer.from(
    `${process.env.MOMO_USER}:${process.env.MOMO_KEY}`
  ).toString("base64");

  const res = await axios.post(
    "https://sandbox.momodeveloper.mtn.com/collection/token/",
    {},
    {
      headers: {
        Authorization: `Basic ${basicToken}`,
        "Ocp-Apim-Subscription-Key": process.env.SUBSCRIPTION_KEY!,
        "Content-Type": "application/json",
      },
    }
  );

  const { access_token, expires_in } = res.data;

  tokenCache = {
    token: access_token,
    expiry: now + expires_in * 1000 - 10000, // buffer
  };

  return access_token;
}
