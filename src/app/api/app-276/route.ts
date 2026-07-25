export async function GET() {
  return Response.json({
    app: 276,
    status: "online",
    agent: "active"
  });
}
