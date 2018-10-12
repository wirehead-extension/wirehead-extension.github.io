module.exports = {
  siteMetadata: {
    title: 'Wirehead',
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Wirehead',
        short_name: 'Wirehead',
        start_url: '/',
        background_color: '#BADA55',
        theme_color: '#C0FFEE',
        display: 'minimal-ui',
        icon: 'src/images/plug.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
  ],
}
