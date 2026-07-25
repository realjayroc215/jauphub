export async function GET() {
  return Response.json({
    app: 950,
    status: "online",
    agent: "active"
  });
}
