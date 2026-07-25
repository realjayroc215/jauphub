export async function GET() {
  return Response.json({
    app: 467,
    status: "online",
    agent: "active"
  });
}
