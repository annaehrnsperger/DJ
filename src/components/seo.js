import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const SEO = ({ lang = 'en', siteTitle = '', title = 'DJ' }) => (
  <Helmet titleTemplate={`${title} ${siteTitle ? `• ${siteTitle}` : ''}`}>
    <html lang={lang} />
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charSet="utf-8" />
  </Helmet>
);

SEO.propTypes = {
  lang: PropTypes.string,
  siteTitle: PropTypes.string,
  title: PropTypes.string,
};

export default SEO;
