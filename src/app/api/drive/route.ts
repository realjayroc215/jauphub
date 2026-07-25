export async function GET() {
  return Response.json({ service: "drive", status: "online" });
}
