export async function GET() {
  return Response.json({
    app: 819,
    status: "online",
    agent: "active"
  });
}
