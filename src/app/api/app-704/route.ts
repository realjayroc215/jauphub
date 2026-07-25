export async function GET() {
  return Response.json({
    app: 704,
    status: "online",
    agent: "active"
  });
}
