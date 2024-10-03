import { API_URL } from '../../../components/assets/api-endpoints';
import { backendAxiosInstance } from "../../../components/assets/hooks/backend-axios-instance";

// For handling POST requests in Next.js 13+ using the app folder structure
export async function POST(req) {
  try {
    const body = await req.json();
    const api_key = process.env.NEXT_PUBLIC_API_KEY;

    const payload = {
        api_key,
    }

    console.log("PAYLOAD ",payload);
    
    const config = {
      headers: {
        Authorization: req.headers.get("authorization"),
      },
    };

    const response = await backendAxiosInstance.post(`${API_URL.FETCH_VISITS}`, payload, config);

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}

export async function GET(req) {
  try {
    const config = {
      headers: {
        Authorization: req.headers.get("authorization"),
      },
    };

    const response = await backendAxiosInstance.get(`${API_URL.GET_COUNTIES}`, config);

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: e.response?.status ?? 500 });
  }
}
