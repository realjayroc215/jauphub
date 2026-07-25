export async function GET() {
  return Response.json({
    app: 697,
    status: "online",
    agent: "active"
  });
}
