import { JAUPCore } from '../../../core/engine';

export async function GET() {
  return Response.json(JAUPCore.status());
}
