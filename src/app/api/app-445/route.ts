export async function GET() {
  return Response.json({
    app: 445,
    status: "online",
    agent: "active"
  });
}
