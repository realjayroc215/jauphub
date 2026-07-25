export async function GET() {
  return Response.json({
    app: 431,
    status: "online",
    agent: "active"
  });
}
