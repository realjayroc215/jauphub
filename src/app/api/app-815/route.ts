export async function GET() {
  return Response.json({
    app: 815,
    status: "online",
    agent: "active"
  });
}
