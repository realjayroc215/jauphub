export async function GET() {
  return Response.json({
    app: 463,
    status: "online",
    agent: "active"
  });
}
