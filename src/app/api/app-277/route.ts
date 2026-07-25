export async function GET() {
  return Response.json({
    app: 277,
    status: "online",
    agent: "active"
  });
}
