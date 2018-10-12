import Typography from 'typography'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Roboto Mono',
      styles: ['400', '700'],
    },
  ],
  headerFontFamily: ['Roboto Mono', 'monospace'],
  bodyFontFamily: ['Roboto Mono', 'monospace'],
})

export default typography
