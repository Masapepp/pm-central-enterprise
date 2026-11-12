import { mkdir, rm, copyFile } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await copyFile('index.html', 'dist/index.html');
console.log('PM CENTRAL build successful: index.html -> dist/index.html');
