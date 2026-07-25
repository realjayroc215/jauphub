export async function GET() {
  return Response.json({
    app: 631,
    status: "online",
    agent: "active"
  });
}
