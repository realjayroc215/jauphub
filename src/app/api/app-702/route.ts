export async function GET() {
  return Response.json({
    app: 702,
    status: "online",
    agent: "active"
  });
}
