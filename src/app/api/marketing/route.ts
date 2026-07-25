import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { type, prompt } = await req.json();

  return Response.json({
    type,
    prompt,
    output: `Apex Marketing AI would generate ${type} content for: ${prompt}`
  });
}
