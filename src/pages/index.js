import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { useConsole } from '../hooks/useConsole';
import SEO from '../components/organisms/seo';

const IndexPage = () => {
  useConsole();

  return (
    <>
      <SEO />
      <h1>Title</h1>
    </>
  );
};

IndexPage.propTypes = {};

export default IndexPage;
