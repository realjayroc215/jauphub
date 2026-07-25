export async function GET() {
  return Response.json({
    app: 976,
    status: "online",
    agent: "active"
  });
}
