export async function GET() {
  return Response.json({
    app: 529,
    status: "online",
    agent: "active"
  });
}
