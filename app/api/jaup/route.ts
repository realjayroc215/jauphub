import { JAUPCore } from '../../../core/engine';
import { JAUPCoreV4 } from '../../../core/engine-v4';

export async function POST(req: Request) {
  const { module, payload, sequence } = await req.json();

  if (Array.isArray(sequence) && sequence.length) {
    const result = await JAUPCoreV4.chain(sequence, payload ?? {});
    return Response.json(result);
  }

  const result = JAUPCore.run(module, payload ?? {});
  return Response.json(result);
}
