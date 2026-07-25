export async function GET() {
  return Response.json({
    app: 624,
    status: "online",
    agent: "active"
  });
}
