export async function GET() {
  return Response.json({
    app: 383,
    status: "online",
    agent: "active"
  });
}
