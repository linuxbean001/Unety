import React from 'react';
import Helmet from 'react-helmet'

const LandingPage = (props) => {
  const { children } = props;

  return (
    <div>
      <Helmet title="Unety.io" />
      {children}
    </div>
  )
};

export default LandingPage;
