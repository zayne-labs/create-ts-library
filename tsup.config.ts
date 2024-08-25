import { type Options, defineConfig } from "tsup";

export default defineConfig((options) => {
	const isProduction = !options.watch;

	const commonOptions = {
		clean: true, // clean up dist folder,
		dts: true, // generate d.ts
		minify: isProduction ? "terser" : false, // minify with terser, put false if you don't need terser
		sourcemap: isProduction,
		tsconfig: "tsconfig.json",
	} satisfies Options;

	return [
		{
			...commonOptions,
			entry: ["src/index.ts", "src/utils/index.ts"],
			format: ["esm"],
			name: "ESM",
			outDir: "./dist/esm",
			platform: "browser",
			skipNodeModulesBundle: true, // skip building deps for node_modules, simply use them as is
			splitting: true,
			target: "esnext",
			treeshake: true,
		},

		// Remove if you don't need to support cjs
		{
			...commonOptions,
			entry: ["src/index.ts", "src/utils/index.ts"],
			format: ["cjs"],
			name: "CJS",
			outDir: "./dist/cjs",
			platform: "node",
		},
	];
});
