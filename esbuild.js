const esbuild = require('esbuild');

const production = process.argv.includes('--production');
const watch = process.argv.includes('--watch');

async function main() {
  const ctx = await esbuild.context({
    entryPoints: ['client/src/extension.ts'],
    bundle: true,
    format: 'cjs',
    minify: production,
    sourcemap: !production,
    sourcesContent: false,
    platform: 'node',
    outfile: 'client/out/extension.js',
    external: ['vscode'],
    logLevel: 'silent',
	treeShaking: true,
	legalComments: "none",
    plugins: [
      /* add to the end of plugins array */
      esbuildProblemMatcherPlugin
    ]
  });

  const serverCtx = await esbuild.context({
    entryPoints: ['server/src/server.ts'], // проверь путь до главного файла сервера!
    bundle: true,
    format: 'cjs',
    platform: 'node',
    outfile: 'server/out/server.js', // сервер будет лежать тут
    minify: true,
    sourcemap: !production,
    plugins: [esbuildProblemMatcherPlugin]
  });

  if (watch) {
    await Promise.all([ctx.watch(), serverCtx.watch()]);
  } else {
    await Promise.all([ctx.rebuild(), serverCtx.rebuild()]);
    await Promise.all([ctx.dispose(), serverCtx.dispose()]);
  }
}

/**
 * @type {import('esbuild').Plugin}
 */
const esbuildProblemMatcherPlugin = {
  name: 'esbuild-problem-matcher',

  setup(build) {
    build.onStart(() => {
      console.log('[watch] build started');
    });
    build.onEnd(result => {
      result.errors.forEach(({ text, location }) => {
        console.error(`✘ [ERROR] ${text}`);
        console.error(`    ${location.file}:${location.line}:${location.column}:`);
      });
      console.log('[watch] build finished');
    });
  }
};

main().catch(e => {
  console.error(e);
  process.exit(1);
});