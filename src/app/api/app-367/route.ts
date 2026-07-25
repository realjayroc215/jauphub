export async function GET() {
  return Response.json({
    app: 367,
    status: "online",
    agent: "active"
  });
}
