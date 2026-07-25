export async function GET() {
  return Response.json({
    app: 605,
    status: "online",
    agent: "active"
  });
}
