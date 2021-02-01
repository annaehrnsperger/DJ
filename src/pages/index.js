import React from 'react';
import SEO from '../components/seo';
import DJ from '../components/dj';
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <SEO />
    <DJ />
  </Layout>
);

IndexPage.propTypes = {};

export default IndexPage;
