export async function GET() {
  return Response.json({
    app: 987,
    status: "online",
    agent: "active"
  });
}
