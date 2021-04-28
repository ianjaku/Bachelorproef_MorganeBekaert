import { default as React } from 'react';

import './layout.scss';

const PageLayout = ({children}) => {
  return (
    <div className="page">
      {children}
    </div>
  );
};

export default PageLayout;
