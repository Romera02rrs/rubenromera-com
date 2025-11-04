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
		'Ruben, Rubén, Ruben Romera, Rubén Romera, Ruben Romera Sánchez, Rubén Romera Sánchez, Ruben programador, Ruben desarrollador, Ruben IA, Ruben inteligencia artificial, Ruben machine learning, Ruben big data, Ruben web developer, Ruben React, Ruben Next.js, Ruben Vue, Ruben portfolio, Ruben CV, Ruben Denia, programador web, desarrollador web, experto IA, frontend developer, backend developer, analista datos'
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
