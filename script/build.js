const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['src/n.ts'],
    outfile: 'dist/n.js',
    bundle: true,
    platform: 'browser',
    target: 'es2023',
    minify: true,
  })
  .catch(() => process.exit(1));
