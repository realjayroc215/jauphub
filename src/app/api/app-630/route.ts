export async function GET() {
  return Response.json({
    app: 630,
    status: "online",
    agent: "active"
  });
}
