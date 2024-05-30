import type { SiteConfig } from '@/types'
import type { AstroExpressiveCodeOptions } from 'astro-expressive-code'

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: 'Rubén Romera Sánchez',
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: 'rubenromera.com',
	// Meta property used as the default description meta property
	description:
		'Descubre mi currículum online, donde podrás ver todos mis proyectos, habilidades, aptitudes, conocimientos, estudios y mucho más, también podrás contactar conmigo desde la web, te espero en rubenromera.com',
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
		'rubenromera, ruben romera, Ruben Romera Sanchez, Rubén Romera Sánchez, Rubén Romera CV, Rubén Romera currículum, Rubén Romera portfolio, Rubén Romera portafolio, programador web, desarrollador web, experto en IA, inteligencia artificial, big data, analista de datos, frontend developer, backend developer, desarrollador React, desarrollador Next.js, desarrollador Vue, proyectos IA, Rubén Romera GitHub, Rubén Romera LinkedIn, Rubén Romera X, Rubén Romera Twitter, Rubén Romera Instagram'
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
