import type { SiteConfig } from '@/types'
import type { AstroExpressiveCodeOptions } from 'astro-expressive-code'

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: 'Rubén Romera Sánchez',
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: 'Ruben Romera',
	// Meta property used as the default description meta property
	description:
		'Ruben Romera Sánchez - Programador web profesional, experto en Inteligencia Artificial y Big Data. Ruben crea soluciones innovadoras con React, Next.js, Vue y tecnologías de IA. Portfolio y proyectos de Ruben.',
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: 'es',
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: 'es',
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: 'es',
		options: {
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		}
	},
	keywords:
		'Ruben, Ruben Romera, Rubén, Rubén Romera, Ruben programador, Rubén programador, Ruben desarrollador, Rubén desarrollador, Ruben IA, Rubén IA, Ruben inteligencia artificial, Rubén inteligencia artificial, Ruben web developer, Rubén web developer, Ruben frontend, Rubén frontend, Ruben backend, Rubén backend, Ruben React, Rubén React, Ruben Next.js, Rubén Next.js, Ruben Vue, Rubén Vue, Ruben machine learning, Rubén machine learning, Ruben big data, Rubén big data, Ruben Romera Sanchez, Rubén Romera Sánchez, Ruben portfolio, Rubén portfolio, Ruben CV, Rubén CV, Ruben GitHub, Rubén GitHub, Ruben LinkedIn, Rubén LinkedIn, Ruben Denia, Rubén Denia, Ruben España, Rubén España, rubenromera.com, rubenromera, programador web, desarrollador web, experto en IA'
}

export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: 'Home',
		path: '/'
	},
	{
		title: 'Blog',
		path: '/blog/'
	}
]

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	// One dark, one light theme => https://expressive-code.com/guides/themes/#available-themes
	themes: ['dracula', 'github-light'],
	themeCssSelector(theme, { styleVariants }) {
		// If one dark and one light theme are available
		// generate theme CSS selectors compatible with cactus-theme dark mode switch
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`
		}
		// return default selector
		return `[data-theme="${theme.name}"]`
	},
	useThemedScrollbars: false,
	styleOverrides: {
		frames: {
			frameBoxShadowCssValue: 'none'
		},
		uiLineHeight: 'inherit',
		codeFontSize: '0.875rem',
		codeLineHeight: '1.7142857rem',
		borderRadius: '4px',
		codePaddingInline: '1rem',
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'
	}
}
