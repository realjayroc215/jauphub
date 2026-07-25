export async function GET() {
  return Response.json({
    app: 930,
    status: "online",
    agent: "active"
  });
}
