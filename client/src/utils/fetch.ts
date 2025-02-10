import { showErrorToast } from "./toastNotification";
import { Method } from "./types";

const BASE_URL = "http://localhost:3000";

/**
 * Creates an API request configuration.
 * @param url - API endpoint.
 * @param method - HTTP method (GET, POST, DELETE).
 * @param payload - Optional payload (string[], object, or null).
 * @returns An object containing full_URL and options for fetch.
 * @throws Error if URL or method is invalid.
 */
const createApiRequest = (
  url: string,
  method: Method,
  payload: string[] | Record<string, FormDataEntryValue> | null = null
): { full_URL: string; options: RequestInit } => {
  if (!url) {
    throw new Error(
      "Invalid URL: Request cannot be made without a valid endpoint."
    );
  }
  if (!method) {
    throw new Error("Invalid Method: HTTP method is required.");
  }

  const full_URL = `${BASE_URL}${url}`;
  const token = localStorage.getItem("token");

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  // Add Authorization header if token exists & request is not for login/signup
  if (token && url !== "/user/signup" && url !== "/user/login") {
    headers["Authorization"] = `Bearer ${token}`;
  }

  // Define request options
  const options: RequestInit = {
    method,
    headers,
  };

  // Include payload if applicable
  if (payload && (method === "POST" || method === "DELETE")) {
    options.body = JSON.stringify(payload);
  }

  return { full_URL, options };
};

/**
 * Sends an API request using fetch.
 * @param url - API endpoint.
 * @param options - Fetch options.
 * @returns Parsed JSON response.
 * @throws Error if the request fails.
 */
const sendApiRequest = async (url: string, options: RequestInit) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "An error occurred while processing the request."
      );
    }

    return data;
  } catch (error) {
    let errorMessage = "Network error, please try again.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    showErrorToast(errorMessage);
    throw new Error(errorMessage); // Allow further handling by the caller
  }
};

export { createApiRequest, sendApiRequest };
