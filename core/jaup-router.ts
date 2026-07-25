export function routeToModule(path: string) {
  const normalized = path.replace(/^\//, '').split('/')[0] || 'home';

  const map: Record<string, string> = {
    'command-center': 'command-center',
    drive: 'drive',
    'office-agent': 'office-agent',
    swarm: 'swarm',
    security: 'security',
  };

  return map[normalized] ?? 'home';
}
