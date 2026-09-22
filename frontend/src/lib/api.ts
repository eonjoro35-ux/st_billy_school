// All requests go through the same-origin "/api" path. In development, Vite's
// proxy (see vite.config.ts) forwards this to the Express server; in production,
// serve the frontend behind the same domain/reverse proxy as the API, or set
// VITE_API_BASE_URL to the deployed API's full URL.
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

export class ApiRequestError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  const body = await res.json().catch(() => null);

  if (!res.ok) {
    throw new ApiRequestError(res.status, body?.message || "Something went wrong. Please try again.");
  }

  return body as T;
}

export const api = {
  get: <T>(path: string) => request<T>(path, { method: "GET" }),
  post: <T>(path: string, data: unknown) =>
    request<T>(path, { method: "POST", body: JSON.stringify(data) }),
};
