export async function GET() {
  return Response.json({
    app: 293,
    status: "online",
    agent: "active"
  });
}
