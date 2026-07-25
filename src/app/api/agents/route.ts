export async function GET() {
  return Response.json({ service: "agents", status: "active" });
}
