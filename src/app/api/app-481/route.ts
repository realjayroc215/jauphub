export async function GET() {
  return Response.json({
    app: 481,
    status: "online",
    agent: "active"
  });
}
