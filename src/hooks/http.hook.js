const baseApi = "https://609f63e2c512c20017dcd2bd.mockapi.io/api/v1";

export const usehttp = () => {
  let error = null;
  const request = async (
    url,
    method = "GET",
    body = null,
    headers = { "Content-Type": "application/json" }
  ) => {
    const response = await fetch(`${baseApi}${url}`, { method, body, headers });
    if (!response.ok)
      throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    if (response.ok) return await response.json();
  };
  return { request };
};
