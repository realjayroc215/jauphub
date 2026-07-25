export async function GET() {
  return Response.json({
    app: 962,
    status: "online",
    agent: "active"
  });
}
