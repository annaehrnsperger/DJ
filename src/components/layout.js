import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from '../styles/GlobalStyles';
import Normalize from '../styles/Normalize';
import Variables from '../styles/Variables';

const Layout = ({ children }) => (
  <>
    {/**
     * Styles
     */}
    <Normalize />
    <GlobalStyles />
    <Variables />
    {/**
     * Content
     */}
    <main>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
