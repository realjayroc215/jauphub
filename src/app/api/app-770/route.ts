export async function GET() {
  return Response.json({
    app: 770,
    status: "online",
    agent: "active"
  });
}
