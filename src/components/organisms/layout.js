import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from '../../styles/GlobalStyles';
import Normalize from '../../styles/Normalize';
import Variables from '../../styles/Variables';
import Header from '../molecules/header';
import Footer from '../molecules/footer';

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
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
