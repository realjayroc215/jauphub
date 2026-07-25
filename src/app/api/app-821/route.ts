export async function GET() {
  return Response.json({
    app: 821,
    status: "online",
    agent: "active"
  });
}
