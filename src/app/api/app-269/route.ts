export async function GET() {
  return Response.json({
    app: 269,
    status: "online",
    agent: "active"
  });
}
