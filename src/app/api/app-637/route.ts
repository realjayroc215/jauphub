export async function GET() {
  return Response.json({
    app: 637,
    status: "online",
    agent: "active"
  });
}
