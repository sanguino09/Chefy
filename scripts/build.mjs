import { cp, mkdir, rm } from 'node:fs/promises';

const root = new URL('..', import.meta.url);
const outDir = new URL('dist/', root);

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });
await cp(new URL('index.html', root), new URL('index.html', outDir));
await cp(new URL('assets/', root), new URL('assets/', outDir), {
  recursive: true
});

console.log('Static assets copied to dist/');
