import { GLOB_MARKDOWN_CODE, zayne } from "@zayne-labs/eslint-config";

export default zayne(
	{
		type: "lib",
		ignores: ["eslint.config.js", "apps/docs/.source/**/*"],
		react: {
			nextjs: {
				overrides: {
					"nextjs/no-html-link-for-pages": ["error", "apps/docs/pages"],
				},
			},
		},
		tailwindcssBetter: {
			settings: { entryPoint: "apps/docs/tailwind.css" },
		},
		typescript: {
			tsconfigPath: ["tsconfig.json", "packages/*/tsconfig.json", "apps/*/tsconfig.json"],
		},
	},
	{
		files: ["apps/docs/**/*"],
		rules: {
			"eslint-comments/require-description": "off",
		},
	},
	{
		files: [`apps/docs/content/docs/${GLOB_MARKDOWN_CODE}`],
		rules: {
			"eslint-comments/disable-enable-pair": "off",
			"no-param-reassign": "off",
		},
	}
).overrides({
	"zayne/react/nextjs/recommended": (config) => ({
		...config,
		files: ["apps/docs/**/*.{ts,tsx}"],
	}),
	"zayne/react/nextjs/rules": (config) => ({
		...config,
		files: ["apps/docs/**/*.{ts,tsx}"],
	}),
	"zayne/react/refresh/rules": (config) => ({
		...config,
		files: ["apps/docs/**/*.{ts,tsx}"],
	}),
});
