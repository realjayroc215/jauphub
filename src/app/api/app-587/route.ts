export async function GET() {
  return Response.json({
    app: 587,
    status: "online",
    agent: "active"
  });
}
