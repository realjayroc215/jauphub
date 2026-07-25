export async function GET() {
  return Response.json({
    app: 810,
    status: "online",
    agent: "active"
  });
}
