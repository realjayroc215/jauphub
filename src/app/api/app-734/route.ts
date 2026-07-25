export async function GET() {
  return Response.json({
    app: 734,
    status: "online",
    agent: "active"
  });
}
