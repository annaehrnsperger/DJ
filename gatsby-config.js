require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `DJ`,
    description: `DJ`,
    author: `Anna Ehrnsperger`,
  },
  plugins: [`gatsby-plugin-react-helmet`, `gatsby-plugin-styled-components`],
};
