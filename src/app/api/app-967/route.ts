export async function GET() {
  return Response.json({
    app: 967,
    status: "online",
    agent: "active"
  });
}
