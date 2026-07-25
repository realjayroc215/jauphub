export async function GET() {
  return Response.json({
    app: 871,
    status: "online",
    agent: "active"
  });
}
