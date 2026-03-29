//api root route

export async function GET() {
  return Response.json({ message: "Welcome to the server API. GET comfy!" });
}
