import React from 'react';
import Helmet from 'react-helmet'
import MainLayout from './main-layout';

export default ({ children, pageContext }) => {
  switch (pageContext.layout) {
    case 'landingPage':
      return (
        <div>
          <Helmet title="Unety.io" />
          {children}
        </div>
      )
    case 'v2':
      return children;
    default:
      return <MainLayout>{children}</MainLayout>
  }
}
