import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Global styles
  globalCss: {
    ':root': {
      '--color-naranja': '#FF7E2D',
      '--color-rojo': '#F00808',
      '--color-verde': '#1AA113',
      '--color-negro': '#010101',
      '--color-blanco': '#F1F1F1',
      '--color-azul': '#2EA1F4',

      '--fuente-montserrat': "'Montserrat', sans-serif",
      '--fuente-work-sans': "'Work Sans', sans-serif"
    },
    'body': {
      background: '#1b1a1a'
    },
    '#root': {
      maxWidth: '1350px',
      margin: '0 auto',
      background: 'var(--color-negro)'
    },
    'h1, h2, h3, h4': {
      fontFamily: 'var(--fuente-montserrat)'
    },
    'p, a, span': {
      fontFamily: 'var(--fuente-work-sans)'
    }
  },

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",
});
