export async function GET() {
  return Response.json({
    app: 860,
    status: "online",
    agent: "active"
  });
}
