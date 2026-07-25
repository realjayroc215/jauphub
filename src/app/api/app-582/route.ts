export async function GET() {
  return Response.json({
    app: 582,
    status: "online",
    agent: "active"
  });
}
