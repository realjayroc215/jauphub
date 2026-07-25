export async function GET() {
  return Response.json({
    app: 438,
    status: "online",
    agent: "active"
  });
}
