export async function GET() {
  return Response.json({
    app: 544,
    status: "online",
    agent: "active"
  });
}
